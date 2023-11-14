import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-drop-down-user',
    standalone: true,
    imports: [CommonModule],
    template: `<button
            id="dropdownMenuIconButton"
            data-dropdown-toggle="dropdownBot"
            class="p-2 text-center text-sm font-medium hover:bg-yg-400/50 focus:outline-none focus:ring-4 focus:ring-yg-400"
            type="button">
            <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M34.1666 16.6216H10.1576C9.13765 16.6216 8.31079 17.4485 8.31079 18.4685V36.9369C8.31079 37.9569 9.13765 38.7838 10.1576 38.7838H34.1666C35.1866 38.7838 36.0135 37.9569 36.0135 36.9369V18.4685C36.0135 17.4485 35.1866 16.6216 34.1666 16.6216Z"
                    stroke="currentColor"
                    stroke-width="3.69369" />
                <path
                    d="M15.6982 25.8559C16.7182 25.8559 17.545 25.029 17.545 24.009C17.545 22.989 16.7182 22.1622 15.6982 22.1622C14.6782 22.1622 13.8513 22.989 13.8513 24.009C13.8513 25.029 14.6782 25.8559 15.6982 25.8559Z"
                    fill="currentColor" />
                <path
                    d="M28.6261 25.8559C29.6461 25.8559 30.473 25.029 30.473 24.009C30.473 22.989 29.6461 22.1622 28.6261 22.1622C27.6062 22.1622 26.7793 22.989 26.7793 24.009C26.7793 25.029 27.6062 25.8559 28.6261 25.8559Z"
                    fill="currentColor" />
                <path
                    d="M18.4684 29.5496C17.9786 29.5496 17.5089 29.7441 17.1625 30.0905C16.8162 30.4368 16.6216 30.9066 16.6216 31.3964C16.6216 31.8862 16.8162 32.356 17.1625 32.7023C17.5089 33.0487 17.9786 33.2433 18.4684 33.2433V29.5496ZM25.8558 33.2433C26.3456 33.2433 26.8154 33.0487 27.1617 32.7023C27.5081 32.356 27.7027 31.8862 27.7027 31.3964C27.7027 30.9066 27.5081 30.4368 27.1617 30.0905C26.8154 29.7441 26.3456 29.5496 25.8558 29.5496V33.2433ZM18.4684 33.2433H25.8558V29.5496H18.4684V33.2433Z"
                    fill="currentColor" />
                <path
                    d="M22.1621 9.23422V16.6216M3.6936 24.009V31.3964M40.6305 24.009V31.3964"
                    stroke="currentColor"
                    stroke-width="3.69369"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
                <path
                    d="M22.162 9.23425C23.182 9.23425 24.0089 8.40739 24.0089 7.3874C24.0089 6.36742 23.182 5.54056 22.162 5.54056C21.142 5.54056 20.3152 6.36742 20.3152 7.3874C20.3152 8.40739 21.142 9.23425 22.162 9.23425Z"
                    stroke="currentColor"
                    stroke-width="3.69369" />
            </svg>
        </button>

        <div
            id="dropdownBot"
            class="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700">
            <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>Bonnie Green</div>
                <div class="truncate font-medium">name&#64;flowbite.com</div>
            </div>
            <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownUserAvatarButton">
                <li>
                    <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >Dashboard</a
                    >
                </li>
                <li>
                    <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >Settings</a
                    >
                </li>
                <li>
                    <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >Earnings</a
                    >
                </li>
            </ul>
            <div class="py-2">
                <button
                    (click)="logout()"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                    Sign out
                </button>
            </div>
        </div>`,
    styles: ``,
})
export class DropDownUserComponent {
    @Input({ required: true }) className = ''

    logout() {
        // TODO: Implement logout
        alert('Method not implemented.')
    }
}
