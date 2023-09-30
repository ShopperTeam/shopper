<?php

/*
 * generated by php bin/console make:command
*/

namespace App\Command;

use RuntimeException;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Process\Process;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Console\Question\Question;
use Symfony\Component\Console\Helper\QuestionHelper;
use Symfony\Component\Dotenv\Dotenv;
use Symfony\Component\Dotenv\Exception\PathException;

#[AsCommand(
    name: 'shopper:install',
    description: "Installation of dependencies, migration and fixtures and generation of SSL keys (JWT auth).",
)]
class InstallCommand extends Command
{

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $io->text($this->getLogo());


        // check if .env.local exist if not, this will help you create one.
        if (!$this->checkEnvLocal()) {
            $io->info('création du fichier .env.local');
            $configCommand = $this->getApplication()->find('shopper:config');
            $configInput = new ArrayInput([
                'command' => 'shopper:config',
                '--no-logo' => true,
            ]);
            $configCommand->run($configInput, $output);
            if ($this->checkEnvLocal()) {
                $io->success("La configuration de l'environnement a été mise à jour. Pour terminer l'installation, exécutez la commande suivante :");
                $io->text("php bin/console shopper:install");
                return Command::SUCCESS;
            } else {
                $io->error("La configuration de l'environnement a échoué. Pour terminer l'installation, exécutez les commandes suivante dans l'ordre:");
                $io->text("php bin/console shopper:config");
                $io->text("php bin/console shopper:install");
                return Command::FAILURE;
            }
        }

        // install composer dependencies
        $io->info('Installation des dépendances composer...');
        $io->text('>> composer install');
        $process = new Process(['composer', 'install']);
        $process->run();


        $io->success('Dependences installer.');



        try {
            $dotenv = new Dotenv();
            $dotenv->load('.env.local');
        } catch (PathException $e) {
            $io->error(".env.local read error: $e");
        }

        // Create database
        $io->info('Creation de la base de donnée ...');
        $createDataBaseCommand = $this->getApplication()->find('doctrine:database:create');
        $createDataBaseInput = new ArrayInput([
            'command' => 'doctrine:database:create',
            '--if-not-exists' => true,
            '--connection' => 'default'
        ]);
        $createDataBaseCommand->run($createDataBaseInput, $output);


        // apply migrations
        $io->info('Insallation des migrations ...');
        $migrationCommand = $this->getApplication()->find('doctrine:migrations:migrate');
        $migrationsInput = new ArrayInput([
            'command' => 'doctrine:migrations:migrate',
        ]);
        $migrationsInput->setInteractive(false);
        $migrationCommand->run($migrationsInput, $output);


        // apply fixtures
        $io->info('Insallation des fixtures ...');
        $fixturesCommand = $this->getApplication()->find('doctrine:fixtures:load');
        $fixturesInput = new ArrayInput([
            'command' => 'doctrine:fixtures:load',
        ]);
        $fixturesInput->setInteractive(false);
        $fixturesCommand->run($fixturesInput, $output);


        // Generate the SSL keys
        // Require OpenSSL installed on your machine !
        $io->info('Génération des clés SSL ...');
        $doctrineCommand = $this->getApplication()->find('lexik:jwt:generate-keypair');
        $migrationsInput = new ArrayInput([
            'command' => 'lexik:jwt:generate-keypair',
        ]);
        $migrationsInput->setInteractive(false);
        $doctrineCommand->run($migrationsInput, $output);

        $io->success("Installation terminée.");
        return Command::SUCCESS;
    }

    protected function checkEnvLocal(): bool
    {
        $filesystem = new Filesystem();
        return $filesystem->exists('.env.local');
    }

    protected function getLogo(): string
    {
        // show logo project
        return "
        ███████╗██╗  ██╗ ██████╗ ██████╗ ██████╗ ███████╗██████╗ 
        ██╔════╝██║  ██║██╔═══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗
        ███████╗███████║██║   ██║██████╔╝██████╔╝█████╗  ██████╔╝
        ╚════██║██╔══██║██║   ██║██╔═══╝ ██╔═══╝ ██╔══╝  ██╔══██╗
        ███████║██║  ██║╚██████╔╝██║     ██║     ███████╗██║  ██║
        ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝     ╚══════╝╚═╝  ╚═╝                                                                                                     
        ";
    }
}
