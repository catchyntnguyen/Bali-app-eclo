import React from 'react';
import { useHistory } from 'react-router';

interface ItemChatProps {
    driverName: string;
    chatContent: string;
    rating: string;
    className?: string;
}

const ItemChat: React.FC<ItemChatProps> = ({
    driverName,
    chatContent,
    rating,
    className = ''
}) => {
    const router = useHistory();
    const navigatorChat = () => {
        router.push('/chat/boxchat');
    }

    return (
        <div className={`box_item-Chat ${className}`} 
        onClick={navigatorChat}
        >
            <div className='box_chat-content'>
                <div className='box_item-driver'>
                    <div className='imgDriver'>
                        <img src="/new.png" alt="" />
                    </div>
                    <div className='infoDriver'>
                        <div className='driverName'>
                            {driverName}

                        </div>
                        <div className='contentChat'>
                            {chatContent}
                        </div>
                    </div>
                    <div className='rate-box-chat'>
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.43438 1.52831C9.63443 1.26342 10.0323 1.26342 10.2324 1.52831L13.0743 5.29135C13.1342 5.37057 13.2162 5.43019 13.31 5.46261L17.7671 7.00264C18.0809 7.11104 18.2038 7.48946 18.0137 7.76157L15.3131 11.6273C15.2562 11.7087 15.2249 11.8051 15.223 11.9044L15.1357 16.6192C15.1296 16.9511 14.8077 17.185 14.4901 17.0883L9.97905 15.7144C9.88409 15.6854 9.78266 15.6854 9.6877 15.7144L5.17663 17.0883C4.85909 17.185 4.53719 16.9511 4.53104 16.6192L4.4437 11.9044C4.44187 11.8051 4.41052 11.7087 4.35367 11.6273L1.65302 7.76157C1.46292 7.48946 1.58587 7.11104 1.89961 7.00264L6.3567 5.46261C6.45053 5.43019 6.53258 5.37057 6.59241 5.29135L9.43438 1.52831Z" stroke="#FFC107" strokeWidth="1.5" />
                        </svg>
                        <div>
                            {rating}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ItemChat;
