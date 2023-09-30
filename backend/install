<?php
echo "Exécution de 'composer install'...\n";
exec('composer install', $composerOutput);
echo implode("\n", $composerOutput) . "\n";

exec('php bin/console shopper:config', $configOutput);
echo implode("\n", $configOutput) . "\n";

exec('php bin/console shopper:install', $installOutput);
echo implode("\n", $installOutput) . "\n";
