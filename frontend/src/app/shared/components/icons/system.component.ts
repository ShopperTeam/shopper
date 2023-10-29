import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-svg-system',
    standalone: true,
    template: ` <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        class="{{ className }}">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier" fill="currentColor">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.3911 16.3358C21.4356 16.3818 21.4579 16.4048 21.4787 16.4276C21.7998 16.7802 21.9843 17.2358 21.999 17.7124C22 17.7433 22 17.7753 22 17.8393C22 17.9885 22 18.0631 21.996 18.1261C21.9325 19.1314 21.1314 19.9325 20.1261 19.996C20.0631 20 19.9885 20 19.8393 20H4.16068C4.01148 20 3.93688 20 3.87388 19.996C2.86865 19.9325 2.06749 19.1314 2.00398 18.1261C2 18.0631 2 17.9885 2 17.8393C2 17.7753 2 17.7433 2.00096 17.7124C2.01569 17.2358 2.20022 16.7802 2.52127 16.4276C2.54208 16.4048 2.56433 16.3818 2.60883 16.3359L3.90311 15H20.0969L21.3911 16.3358ZM8.75 18C8.75 17.5858 9.08579 17.25 9.5 17.25H14.5C14.9142 17.25 15.25 17.5858 15.25 18C15.25 18.4142 14.9142 18.75 14.5 18.75H9.5C9.08579 18.75 8.75 18.4142 8.75 18Z"></path>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.35294 7C4.35294 5.11438 4.35294 4.17157 4.93873 3.58579C5.52451 3 6.46732 3 8.35294 3H15.6471C17.5327 3 18.4755 3 19.0613 3.58579C19.6471 4.17157 19.6471 5.11438 19.6471 7V14H4.35294V7ZM12 6.5C12.4142 6.5 12.75 6.16421 12.75 5.75C12.75 5.33579 12.4142 5 12 5C11.5858 5 11.25 5.33579 11.25 5.75C11.25 6.16421 11.5858 6.5 12 6.5Z"></path>
        </g>
    </svg>`,
})
export class SvgSystemComponent {
    @Input({ required: true }) className = ''
}
