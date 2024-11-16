import Document from '@/public/Document.svg';

const dataIcon = [
    {
        id: 1,
        name: 'Home',
        svgActive:
            ` 
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 10.9384C3 9.71422 3.56058 8.55744 4.52142 7.79888L10.0214 3.45677C11.4747 2.30948 13.5253 2.30948 14.9786 3.45677L20.4786 7.79888C21.4394 8.55744 22 9.71422 22 10.9384V17.5C22 19.7091 20.2091 21.5 18 21.5H16.5C15.9477 21.5 15.5 21.0523 15.5 20.5V17.5C15.5 16.3954 14.6046 15.5 13.5 15.5H11.5C10.3954 15.5 9.5 16.3954 9.5 17.5V20.5C9.5 21.0523 9.05228 21.5 8.5 21.5H7C4.79086 21.5 3 19.7091 3 17.5L3 10.9384Z" fill="white"/>
            <path d="M3 10.9384C3 9.71422 3.56058 8.55744 4.52142 7.79888L10.0214 3.45677C11.4747 2.30948 13.5253 2.30948 14.9786 3.45677L20.4786 7.79888C21.4394 8.55744 22 9.71422 22 10.9384V17.5C22 19.7091 20.2091 21.5 18 21.5H16.5C15.9477 21.5 15.5 21.0523 15.5 20.5V17.5C15.5 16.3954 14.6046 15.5 13.5 15.5H11.5C10.3954 15.5 9.5 16.3954 9.5 17.5V20.5C9.5 21.0523 9.05228 21.5 8.5 21.5H7C4.79086 21.5 3 19.7091 3 17.5L3 10.9384Z" fill="black"/>
            <path d="M3 10.9384C3 9.71422 3.56058 8.55744 4.52142 7.79888L10.0214 3.45677C11.4747 2.30948 13.5253 2.30948 14.9786 3.45677L20.4786 7.79888C21.4394 8.55744 22 9.71422 22 10.9384V17.5C22 19.7091 20.2091 21.5 18 21.5H16.5C15.9477 21.5 15.5 21.0523 15.5 20.5V17.5C15.5 16.3954 14.6046 15.5 13.5 15.5H11.5C10.3954 15.5 9.5 16.3954 9.5 17.5V20.5C9.5 21.0523 9.05228 21.5 8.5 21.5H7C4.79086 21.5 3 19.7091 3 17.5L3 10.9384Z" stroke="black" stroke-width="1.5"/>
        </svg>

        `
        ,
        svg: ` 
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 10.9384C3 9.71422 3.56058 8.55744 4.52142 7.79888L10.0214 3.45677C11.4747 2.30948 13.5253 2.30948 14.9786 3.45677L20.4786 7.79888C21.4394 8.55744 22 9.71422 22 10.9384V17.5C22 19.7091 20.2091 21.5 18 21.5H16.5C15.9477 21.5 15.5 21.0523 15.5 20.5V17.5C15.5 16.3954 14.6046 15.5 13.5 15.5H11.5C10.3954 15.5 9.5 16.3954 9.5 17.5V20.5C9.5 21.0523 9.05228 21.5 8.5 21.5H7C4.79086 21.5 3 19.7091 3 17.5L3 10.9384Z" stroke="black" stroke-width="1.5"/>
        </svg>
            `,
        href: 'home'
    },
    {
        id: 2,
        name: 'Activite',
        svgActive:
            `
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="2" width="16" height="20" rx="4" fill="white"/>
<rect x="4" y="2" width="16" height="20" rx="4" fill="black"/>
<rect x="4" y="2" width="16" height="20" rx="4" stroke="black" stroke-width="1.5"/>
<path d="M8 7H16" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
<path d="M8 12H16" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
<path d="M8 17H12" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
</svg>

        `,
        svg:
            ` 
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="2" width="16" height="20" rx="4" stroke="black" stroke-width="1.5"/>
<path d="M8 7H16" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
<path d="M8 12H16" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
<path d="M8 17H12" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
</svg>

         `,
        href: 'activite'
    },
    {
        id: 3,
        name: 'Payment',
        svgActive: ` 
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2.5" y="6" width="20" height="16" rx="5" fill="white"/>
        <rect x="2.5" y="6" width="20" height="16" rx="5" fill="black"/>
        <rect x="2.5" y="6" width="20" height="16" rx="5" stroke="black" stroke-width="1.5"/>
        <path d="M19.5 6.5V6.5C19.5 4.17692 17.3678 2.43898 15.0924 2.90744L6.49174 4.67817C4.16769 5.15665 2.5 7.20267 2.5 9.57546L2.5 13" stroke="black" stroke-width="1.5"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 17.5H12.5Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 17.5H12.5Z" fill="black"/>
        <path d="M6.5 17.5H12.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.5 14C15.5 12.6193 16.6193 11.5 18 11.5H22.5V16.5H18C16.6193 16.5 15.5 15.3807 15.5 14V14Z" fill="white"/>
        <path d="M15.5 14C15.5 12.6193 16.6193 11.5 18 11.5H22.5V16.5H18C16.6193 16.5 15.5 15.3807 15.5 14V14Z" fill="black"/>
        <path d="M15.5 14C15.5 12.6193 16.6193 11.5 18 11.5H22.5V16.5H18C16.6193 16.5 15.5 15.3807 15.5 14V14Z" stroke="white" stroke-width="1.5"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18 14H18.2Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18 14H18.2Z" fill="black"/>
        <path d="M18 14H18.2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

                    `,
        svg: ` <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2.5" y="6" width="20" height="16" rx="5" stroke="black" stroke-width="1.5"/>
<path d="M19.5 6.5V6.5C19.5 4.17692 17.3678 2.43898 15.0924 2.90744L6.49174 4.67817C4.16769 5.15665 2.5 7.20267 2.5 9.57546L2.5 13" stroke="black" stroke-width="1.5"/>
<path d="M6.5 17.5H12.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5 14C15.5 12.6193 16.6193 11.5 18 11.5H22.5V16.5H18C16.6193 16.5 15.5 15.3807 15.5 14V14Z" stroke="black" stroke-width="1.5"/>
<path d="M18 14H18.2" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    `,
        href: 'payment'
    },
    {
        id: 4,
        name: 'Chat',
        svgActive: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 3C4.23858 3 2 5.23858 2 8V13.5V14V20.9194C2 21.7579 2.96993 22.2241 3.6247 21.7002L6.45217 19.4383C6.8068 19.1546 7.24742 19 7.70156 19H17C19.7614 19 22 16.7614 22 14V8C22 5.23858 19.7614 3 17 3H7Z" fill="#D9D9D9"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 3C4.23858 3 2 5.23858 2 8V13.5V14V20.9194C2 21.7579 2.96993 22.2241 3.6247 21.7002L6.45217 19.4383C6.8068 19.1546 7.24742 19 7.70156 19H17C19.7614 19 22 16.7614 22 14V8C22 5.23858 19.7614 3 17 3H7Z" fill="black"/>
            <path d="M3.6247 21.7002L3.15617 21.1146L3.15617 21.1146L3.6247 21.7002ZM6.45217 19.4383L5.98365 18.8526L6.45217 19.4383ZM2.75 8C2.75 5.65279 4.65279 3.75 7 3.75V2.25C3.82436 2.25 1.25 4.82436 1.25 8H2.75ZM2.75 13.5V8H1.25V13.5H2.75ZM2.75 14V13.5H1.25V14H2.75ZM2.75 20.9194V14H1.25V20.9194H2.75ZM3.15617 21.1146C2.99248 21.2455 2.75 21.129 2.75 20.9194H1.25C1.25 22.3868 2.94738 23.2026 4.09322 22.2859L3.15617 21.1146ZM5.98365 18.8526L3.15617 21.1146L4.09322 22.2859L6.92069 20.0239L5.98365 18.8526ZM17 18.25H7.70156V19.75H17V18.25ZM21.25 14C21.25 16.3472 19.3472 18.25 17 18.25V19.75C20.1756 19.75 22.75 17.1756 22.75 14H21.25ZM21.25 8V14H22.75V8H21.25ZM17 3.75C19.3472 3.75 21.25 5.65279 21.25 8H22.75C22.75 4.82436 20.1756 2.25 17 2.25V3.75ZM7 3.75H17V2.25H7V3.75ZM6.92069 20.0239C7.14233 19.8466 7.41772 19.75 7.70156 19.75V18.25C7.07712 18.25 6.47126 18.4625 5.98365 18.8526L6.92069 20.0239Z" fill="black"/>
            <circle cx="7.0498" cy="11.0498" r="1.25" fill="white"/>
            <circle cx="12.0498" cy="11.0498" r="1.25" fill="white"/>
            <circle cx="17.0498" cy="11.0498" r="1.25" fill="white"/>
            </svg>
`,
        svg: ` 
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.6247 21.7002L3.15617 21.1146H3.15617L3.6247 21.7002ZM6.45217 19.4383L5.98365 18.8526L6.45217 19.4383ZM2.75 8C2.75 5.65279 4.65279 3.75 7 3.75V2.25C3.82436 2.25 1.25 4.82436 1.25 8H2.75ZM2.75 13.5V8H1.25V13.5H2.75ZM2.75 14V13.5H1.25V14H2.75ZM2.75 20.9194V14H1.25V20.9194H2.75ZM3.15617 21.1146C2.99248 21.2455 2.75 21.129 2.75 20.9194H1.25C1.25 22.3868 2.94738 23.2026 4.09322 22.2859L3.15617 21.1146ZM5.98365 18.8526L3.15617 21.1146L4.09322 22.2859L6.92069 20.0239L5.98365 18.8526ZM17 18.25H7.70156V19.75H17V18.25ZM21.25 14C21.25 16.3472 19.3472 18.25 17 18.25V19.75C20.1756 19.75 22.75 17.1756 22.75 14H21.25ZM21.25 8V14H22.75V8H21.25ZM17 3.75C19.3472 3.75 21.25 5.65279 21.25 8H22.75C22.75 4.82436 20.1756 2.25 17 2.25V3.75ZM7 3.75H17V2.25H7V3.75ZM6.92069 20.0239C7.14233 19.8466 7.41772 19.75 7.70156 19.75V18.25C7.07712 18.25 6.47126 18.4625 5.98365 18.8526L6.92069 20.0239Z" fill="black"/>
        <circle cx="7.0498" cy="11.0498" r="1.25" fill="black"/>
        <circle cx="12.0498" cy="11.0498" r="1.25" fill="black"/>
        <circle cx="17.0498" cy="11.0498" r="1.25" fill="black"/>
        </svg>
`,
        href: 'chat'
    },
    {
        id: 5,
        name: 'User',
        svgActive: `
       <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="4" cy="4" r="4" transform="matrix(-1 0 0 1 16.5 3)" fill="white"/>
<circle cx="4" cy="4" r="4" transform="matrix(-1 0 0 1 16.5 3)" fill="black"/>
<circle cx="4" cy="4" r="4" transform="matrix(-1 0 0 1 16.5 3)" stroke="black" stroke-width="1.5"/>
<path d="M5.5 16.9347C5.5 16.0743 6.04085 15.3068 6.85109 15.0175V15.0175C10.504 13.7128 14.496 13.7128 18.1489 15.0175V15.0175C18.9591 15.3068 19.5 16.0743 19.5 16.9347V18.2502C19.5 19.4376 18.4483 20.3498 17.2728 20.1818L16.3184 20.0455C13.7856 19.6837 11.2144 19.6837 8.68162 20.0455L7.72721 20.1818C6.5517 20.3498 5.5 19.4376 5.5 18.2502V16.9347Z" fill="white"/>
<path d="M5.5 16.9347C5.5 16.0743 6.04085 15.3068 6.85109 15.0175V15.0175C10.504 13.7128 14.496 13.7128 18.1489 15.0175V15.0175C18.9591 15.3068 19.5 16.0743 19.5 16.9347V18.2502C19.5 19.4376 18.4483 20.3498 17.2728 20.1818L16.3184 20.0455C13.7856 19.6837 11.2144 19.6837 8.68162 20.0455L7.72721 20.1818C6.5517 20.3498 5.5 19.4376 5.5 18.2502V16.9347Z" fill="black"/>
<path d="M5.5 16.9347C5.5 16.0743 6.04085 15.3068 6.85109 15.0175V15.0175C10.504 13.7128 14.496 13.7128 18.1489 15.0175V15.0175C18.9591 15.3068 19.5 16.0743 19.5 16.9347V18.2502C19.5 19.4376 18.4483 20.3498 17.2728 20.1818L16.3184 20.0455C13.7856 19.6837 11.2144 19.6837 8.68162 20.0455L7.72721 20.1818C6.5517 20.3498 5.5 19.4376 5.5 18.2502V16.9347Z" stroke="black" stroke-width="1.5"/>
</svg>

`,
        svg: ` 
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="4" cy="4" r="4" transform="matrix(-1 0 0 1 16.5 3)" stroke="black" stroke-width="1.5"/>
<path d="M5.5 16.9347C5.5 16.0743 6.04085 15.3068 6.85109 15.0175V15.0175C10.504 13.7128 14.496 13.7128 18.1489 15.0175V15.0175C18.9591 15.3068 19.5 16.0743 19.5 16.9347V18.2502C19.5 19.4376 18.4483 20.3498 17.2728 20.1818L16.3184 20.0455C13.7856 19.6837 11.2144 19.6837 8.68162 20.0455L7.72721 20.1818C6.5517 20.3498 5.5 19.4376 5.5 18.2502V16.9347Z" stroke="black" stroke-width="1.5"/>
</svg>
`,
        href: 'user'
    }
]
export default dataIcon;