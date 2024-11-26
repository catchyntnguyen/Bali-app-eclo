import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonItem,
  IonNavLink,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
  IonModal,
  IonRadio,
  IonRadioGroup,
  IonCheckbox,
  IonLabel,
  IonDatetime
} from '@ionic/react';
import React, { useEffect, useRef, useState } from 'react';
import Headers2 from '../../components/header2';
import ItemChat from '../../components/itemchat';

interface FormattedDateTime {
  date: string;
  time: string;
}
const Page: React.FC = () => {
  const [startDate, setStartDate] = useState<string>('');
  const [dateStart, setDateStart] = useState<string>('');
  const [dayStart, setDayStart] = useState<string>('');
  const [timeStart, setTimeStart] = useState<string>('');
  const [dateEnd, setDateEnd] = useState<string>('');
  const [dayEnd, setDayEnd] = useState<string>('');
  const [timeEnd, setTimeEnd] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [showStartDatePickerStart, setShowStartDatePickerStart] = useState<boolean>(false);
  const [showStartDatePickerEnd, setShowStartDatePickerEnd] = useState<boolean>(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState<boolean>(false);
  const [submittedDates, setSubmittedDates] = useState<{ start: string | null; end: string | null }>({ start: null, end: null });
  function formatDateTime(dateTime: string) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const [date, time] = dateTime.split('T');
    const [year, month, day] = date.split('-');

    const formattedDate = `${day}/${month}/${year}`;

    const dateObj = new Date(dateTime);
    const dayOfWeek = daysOfWeek[dateObj.getUTCDay()];

    const [hour, minute] = time.split(':');
    const hourNum = parseInt(hour, 10);
    const isPM = hourNum >= 12;
    const formattedHour = hourNum % 12 === 0 ? 12 : hourNum % 12;
    const amPm = isPM ? 'PM' : 'AM';
    const formattedTime = `${formattedHour}:${minute} ${amPm}`;

    return {
      date: formattedDate,
      day: dayOfWeek,
      time: formattedTime
    };
  }



  // const submitDates = () => {
  //   setSubmittedDates({ start: startDate, end: endDate });
  //   setShowStartDatePicker(false);
  //   setShowEndDatePicker(false);
  // };

  const clickShowDatePickerStart = () => {
    if (showStartDatePickerStart) {
      setShowStartDatePickerStart(false)
    } else {
      setShowStartDatePickerStart(true)
    }
  }
  const clickShowDatePickerEnd = () => {
    if (showStartDatePickerEnd) {
      setShowStartDatePickerEnd(false)
    } else {
      setShowStartDatePickerEnd(true)
    }
  }
  const valueDateStart = (e: CustomEvent) => {
    const rawValue = e.detail.value;

    if (rawValue) {
      const data: FormattedDateTime = formatDateTime(rawValue);
      setDayStart(data.date);
      setTimeStart(data.time);
    } else {
      console.error('Date value is null or undefined');
    }
  };
  const valueDateEnd = (e: CustomEvent) => {
    const rawValue = e.detail.value;

    if (rawValue) {
      const data: FormattedDateTime = formatDateTime(rawValue);
      setDayEnd(data.date);
      setTimeEnd(data.time);
    } else {
      console.error('Date value is null or undefined');
    }
  };


  return (
    <IonPage>
      <IonContent fullscreen >
        <IonGrid className='contentPage' fixed>
          <IonRow className="ion-justify-content-center ">
            <IonCol sizeSm="12" sizeMd="8" sizeLg="6" sizeXl="6">
              <Headers2
                title='Booking' className={''}
                icon={''}
              />
              <div className="content2">
                <div className='bill-detailcar'>
                  <div className='bill-detailcar-first'>
                    <div className='bill-detailcar-first-img'>
                      <img src="/car.png" alt="" />
                    </div>
                    <div className='bill-detailcar-specifications'>
                      <div className='specifications2'>
                        <div className='specifications2-on'>
                          <div className='specifications2-on-box'>
                            <div className='item-specifications'>
                              <div>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <g clip-path="url(#clip0_160_5661)">
                                    <path d="M12 12.5C13.0384 12.5 14.0534 12.1921 14.9167 11.6152C15.7801 11.0383 16.453 10.2184 16.8504 9.25909C17.2477 8.29978 17.3517 7.24418 17.1491 6.22578C16.9466 5.20738 16.4465 4.27192 15.7123 3.53769C14.9781 2.80347 14.0426 2.30345 13.0242 2.10088C12.0058 1.89831 10.9502 2.00227 9.99091 2.39963C9.0316 2.79699 8.21166 3.4699 7.63478 4.33326C7.05791 5.19662 6.75 6.21165 6.75 7.25C6.75139 8.64196 7.30496 9.97651 8.28922 10.9608C9.27349 11.945 10.608 12.4986 12 12.5ZM12 3.75C12.6922 3.75 13.3689 3.95527 13.9445 4.33986C14.5201 4.72444 14.9687 5.27107 15.2336 5.91061C15.4985 6.55015 15.5678 7.25388 15.4327 7.93282C15.2977 8.61175 14.9644 9.23539 14.4749 9.72488C13.9854 10.2144 13.3618 10.5477 12.6828 10.6828C12.0039 10.8178 11.3001 10.7485 10.6606 10.4836C10.0211 10.2187 9.47444 9.77007 9.08986 9.1945C8.70527 8.61893 8.5 7.94224 8.5 7.25C8.5 6.32174 8.86875 5.43151 9.52513 4.77513C10.1815 4.11875 11.0717 3.75 12 3.75Z" fill="#434343" />
                                    <path d="M12 14.2505C9.91213 14.2528 7.91044 15.0832 6.43409 16.5596C4.95774 18.0359 4.12732 20.0376 4.125 22.1255C4.125 22.3576 4.21719 22.5801 4.38128 22.7442C4.54538 22.9083 4.76794 23.0005 5 23.0005C5.23206 23.0005 5.45462 22.9083 5.61872 22.7442C5.78281 22.5801 5.875 22.3576 5.875 22.1255C5.875 20.501 6.52031 18.9431 7.66897 17.7945C8.81763 16.6458 10.3755 16.0005 12 16.0005C13.6245 16.0005 15.1824 16.6458 16.331 17.7945C17.4797 18.9431 18.125 20.501 18.125 22.1255C18.125 22.3576 18.2172 22.5801 18.3813 22.7442C18.5454 22.9083 18.7679 23.0005 19 23.0005C19.2321 23.0005 19.4546 22.9083 19.6187 22.7442C19.7828 22.5801 19.875 22.3576 19.875 22.1255C19.8727 20.0376 19.0423 18.0359 17.5659 16.5596C16.0896 15.0832 14.0879 14.2528 12 14.2505Z" fill="#434343" />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_160_5661">
                                      <rect width="21" height="21" fill="white" transform="translate(1.5 2)" />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                              <div>4 seats</div>
                            </div>
                            <div className='item-specifications'>
                              <div>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <g clip-path="url(#clip0_160_5671)">
                                    <path d="M14.6254 23H9.37537V19.9261C8.46297 19.6033 7.61789 19.1151 6.88249 18.4859L4.21899 20.025L1.59399 15.475L4.25662 13.9394C4.08172 12.9878 4.08172 12.0122 4.25662 11.0606L1.59399 9.525L4.21899 4.975L6.88249 6.51412C7.61789 5.88493 8.46297 5.39669 9.37537 5.07387V2H14.6254V5.07387C15.5378 5.39669 16.3828 5.88493 17.1182 6.51412L19.7817 4.975L22.4067 9.525L19.7441 11.0606C19.919 12.0122 19.919 12.9878 19.7441 13.9394L22.4067 15.475L19.7817 20.025L17.1182 18.4867C16.3828 19.1156 15.5377 19.6036 14.6254 19.9261V23ZM11.1254 21.25H12.8754V18.6014L13.5325 18.4316C14.6105 18.1524 15.5917 17.5839 16.3701 16.7875L16.8452 16.3036L19.1404 17.6292L20.0154 16.1137L17.7229 14.7899L17.9031 14.1371C18.1994 13.0634 18.1994 11.9296 17.9031 10.8559L17.7229 10.2031L20.0154 8.87925L19.1404 7.36375L16.8452 8.69287L16.3701 8.2125C15.5913 7.41743 14.6101 6.85014 13.5325 6.57188L12.8754 6.39862V3.75H11.1254V6.39862L10.4682 6.56838C9.39023 6.84763 8.40902 7.41615 7.63062 8.2125L7.15549 8.69637L4.86037 7.36725L3.98537 8.88275L6.27787 10.2066L6.09762 10.8594C5.80131 11.9331 5.80131 13.0669 6.09762 14.1406L6.27787 14.7934L3.98537 16.1173L4.86037 17.6327L7.15549 16.3071L7.63062 16.791C8.40945 17.5861 9.39062 18.1534 10.4682 18.4316L11.1254 18.6014V21.25ZM12.0004 16C11.3081 16 10.6314 15.7947 10.0559 15.4101C9.4803 15.0256 9.0317 14.4789 8.76679 13.8394C8.50188 13.1999 8.43257 12.4961 8.56762 11.8172C8.70267 11.1383 9.03601 10.5146 9.5255 10.0251C10.015 9.53564 10.6386 9.2023 11.3176 9.06725C11.9965 8.9322 12.7002 9.00151 13.3398 9.26642C13.9793 9.53133 14.5259 9.97993 14.9105 10.5555C15.2951 11.1311 15.5004 11.8078 15.5004 12.5C15.5004 13.4283 15.1316 14.3185 14.4752 14.9749C13.8189 15.6313 12.9286 16 12.0004 16ZM12.0004 10.75C11.6543 10.75 11.3159 10.8526 11.0281 11.0449C10.7403 11.2372 10.516 11.5105 10.3836 11.8303C10.2511 12.1501 10.2165 12.5019 10.284 12.8414C10.3515 13.1809 10.5182 13.4927 10.7629 13.7374C11.0077 13.9822 11.3195 14.1489 11.659 14.2164C11.9984 14.2839 12.3503 14.2492 12.6701 14.1168C12.9898 13.9843 13.2631 13.76 13.4554 13.4722C13.6477 13.1845 13.7504 12.8461 13.7504 12.5C13.7504 12.0359 13.566 11.5908 13.2378 11.2626C12.9096 10.9344 12.4645 10.75 12.0004 10.75Z" fill="#434343" />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_160_5671">
                                      <rect width="21" height="21" fill="white" transform="translate(1.5 2)" />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                              <div>Automatic</div>
                            </div>
                          </div>
                          <div className='specifications2-on-box'>
                            <div className='item-specifications-end'>
                              <div>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M19.875 7.5H17.25C17.25 6.17392 16.6969 4.90215 15.7123 3.96447C14.7277 3.02678 13.3924 2.5 12 2.5C10.6076 2.5 9.27226 3.02678 8.28769 3.96447C7.30312 4.90215 6.75 6.17392 6.75 7.5H4.125C3.42881 7.5 2.76113 7.76339 2.26884 8.23223C1.77656 8.70107 1.5 9.33696 1.5 10L1.5 18.3333C1.50139 19.438 1.96277 20.497 2.78294 21.2782C3.60311 22.0593 4.7151 22.4987 5.875 22.5H18.125C19.2849 22.4987 20.3969 22.0593 21.2171 21.2782C22.0372 20.497 22.4986 19.438 22.5 18.3333V10C22.5 9.33696 22.2234 8.70107 21.7312 8.23223C21.2389 7.76339 20.5712 7.5 19.875 7.5ZM12 4.16667C12.9283 4.16667 13.8185 4.51786 14.4749 5.14298C15.1313 5.7681 15.5 6.61594 15.5 7.5H8.5C8.5 6.61594 8.86875 5.7681 9.52513 5.14298C10.1815 4.51786 11.0717 4.16667 12 4.16667ZM20.75 18.3333C20.75 18.9964 20.4734 19.6323 19.9812 20.1011C19.4889 20.5699 18.8212 20.8333 18.125 20.8333H5.875C5.17881 20.8333 4.51113 20.5699 4.01884 20.1011C3.52656 19.6323 3.25 18.9964 3.25 18.3333V10C3.25 9.77899 3.34219 9.56702 3.50628 9.41074C3.67038 9.25446 3.89294 9.16667 4.125 9.16667H6.75V10.8333C6.75 11.0543 6.84219 11.2663 7.00628 11.4226C7.17038 11.5789 7.39294 11.6667 7.625 11.6667C7.85706 11.6667 8.07962 11.5789 8.24372 11.4226C8.40781 11.2663 8.5 11.0543 8.5 10.8333V9.16667H15.5V10.8333C15.5 11.0543 15.5922 11.2663 15.7563 11.4226C15.9204 11.5789 16.1429 11.6667 16.375 11.6667C16.6071 11.6667 16.8296 11.5789 16.9937 11.4226C17.1578 11.2663 17.25 11.0543 17.25 10.8333V9.16667H19.875C20.1071 9.16667 20.3296 9.25446 20.4937 9.41074C20.6578 9.56702 20.75 9.77899 20.75 10V18.3333Z" fill="#434343" />
                                </svg>
                              </div>
                              <div>2 Small Bag</div>
                            </div>
                            <div className='item-specifications-end'>
                              <div>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8.78571 19.7V8.9H6.85714V19.7M12.9643 19.7V8.9H11.0357V19.7M17.1429 19.7V8.9H15.2143V19.7M18.4671 5.3C19.8557 5.3 21 6.356 21 7.7V20.9C21 22.256 19.8557 23.3 18.4671 23.3C18.4671 23.996 17.8629 24.5 17.1429 24.5C16.5 24.5 15.8571 23.996 15.8571 23.3H8.14286C8.14286 23.996 7.5 24.5 6.85714 24.5C6.13714 24.5 5.53286 23.996 5.53286 23.3C4.14429 23.3 3 22.256 3 20.9V7.7C3 6.356 4.14429 5.3 5.53286 5.3H8.14286V1.7C8.14286 1.004 8.73429 0.5 9.42857 0.5H14.5714C15.2657 0.5 15.8571 1.004 15.8571 1.7V5.3M10.0714 2.3V5.3H13.9286V2.3M18.4671 20.9V7.7H5.53286V20.9" fill="#434343" />
                                </svg>
                              </div>
                              <div>1 Large Bag</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='detail-booking'>
                    <div className='detail-booking-from-parent'>
                      <div className='detail-booking-from'>
                        <div className='icon-first'>
                          <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="5.5" r="5" fill="#F10000" fill-opacity="0.5" stroke="#434343" />
                          </svg>
                        </div>
                        <div className='icon-secondary'>
                          <div className='formDate' onClick={() => clickShowDatePickerStart()}>
                            <IonLabel>{dayStart ? dayStart : '---, -- / --/ --'}</IonLabel>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M19.5 4H18.5V2H16.5V4H8.5V2H6.5V4H5.5C4.39 4 3.51 4.9 3.51 6L3.5 20C3.5 21.1 4.39 22 5.5 22H19.5C20.6 22 21.5 21.1 21.5 20V6C21.5 4.9 20.6 4 19.5 4ZM19.5 20H5.5V10H19.5V20ZM19.5 8H5.5V6H19.5V8ZM9.5 14H7.5V12H9.5V14ZM13.5 14H11.5V12H13.5V14ZM17.5 14H15.5V12H17.5V14ZM9.5 18H7.5V16H9.5V18ZM13.5 18H11.5V16H13.5V18ZM17.5 18H15.5V16H17.5V18Z" fill="black" />
                            </svg>
                          </div>
                          <div className='formDate' onClick={() => clickShowDatePickerStart()}>
                            <IonLabel>{timeStart ? timeStart : '-- : -- --'}</IonLabel>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.5 17C11.5 17.55 11.95 18 12.5 18C13.05 18 13.5 17.55 13.5 17C13.5 16.45 13.05 16 12.5 16C11.95 16 11.5 16.45 11.5 17ZM11.5 3V7H13.5V5.08C16.89 5.57 19.5 8.47 19.5 12C19.5 15.87 16.37 19 12.5 19C8.63 19 5.5 15.87 5.5 12C5.5 10.32 6.09 8.78 7.08 7.58L12.5 13L13.91 11.59L7.11 4.79V4.81C4.92 6.45 3.5 9.05 3.5 12C3.5 16.97 7.52 21 12.5 21C17.47 21 21.5 16.97 21.5 12C21.5 7.03 17.47 3 12.5 3H11.5ZM18.5 12C18.5 11.45 18.05 11 17.5 11C16.95 11 16.5 11.45 16.5 12C16.5 12.55 16.95 13 17.5 13C18.05 13 18.5 12.55 18.5 12ZM6.5 12C6.5 12.55 6.95 13 7.5 13C8.05 13 8.5 12.55 8.5 12C8.5 11.45 8.05 11 7.5 11C6.95 11 6.5 11.45 6.5 12Z" fill="black" />
                            </svg>
                          </div>
                        </div>
                        <div className='icon-last'>
                          Form
                        </div>
                      </div>
                      <div className='map-detail-booking'>
                        <div className='localtion-form'>
                          ---------------------
                        </div>
                        <div >
                          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.52 20.43V22.4501C15.53 22.25 17.36 21.4501 18.84 20.24L17.42 18.81C16.31 19.67 14.98 20.25 13.52 20.43Z" fill="black" />
                            <path d="M4.53003 12.5C4.53003 8.45005 7.56003 5.09005 11.48 4.57005V2.55005C6.45003 3.08005 2.53003 7.34005 2.53003 12.5C2.53003 17.66 6.45003 21.92 11.48 22.4501V20.43C7.56003 19.91 4.53003 16.55 4.53003 12.5Z" fill="black" />
                            <path d="M20.45 11.5H22.47C22.27 9.49005 21.47 7.66005 20.26 6.18005L18.83 7.61005C19.69 8.71005 20.27 10.04 20.45 11.5Z" fill="black" />
                            <path d="M18.84 4.76005C17.36 3.55005 15.52 2.75005 13.52 2.55005V4.57005C14.98 4.75005 16.31 5.33005 17.42 6.19005L18.84 4.76005Z" fill="black" />
                            <path d="M18.83 17.4L20.26 18.82C21.47 17.34 22.27 15.51 22.47 13.5H20.45C20.27 14.96 19.69 16.29 18.83 17.4Z" fill="black" />
                            <path d="M16.5 11.6C16.5 9.11005 14.6 7.50005 12.5 7.50005C10.4 7.50005 8.50003 9.11005 8.50003 11.6C8.50003 13.26 9.83003 15.23 12.5 17.5C15.17 15.23 16.5 13.26 16.5 11.6ZM12.5 12.5C11.91 12.5 11.43 12.02 11.43 11.43C11.43 10.84 11.91 10.36 12.5 10.36C13.09 10.36 13.57 10.84 13.57 11.43C13.57 12.02 13.09 12.5 12.5 12.5Z" fill="black" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className='detail-booking-to-parent'>
                      <div className='detail-booking-from'>
                        <div className='icon-first'>
                          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5.5" cy="5.5" r="5" fill="#00E6B3" stroke="#434343" />
                          </svg>
                        </div>
                        <div className='icon-secondary'>
                          <div className='formDate' onClick={() => clickShowDatePickerEnd()}>
                            <IonLabel>{dayEnd ? dayEnd : '---, -- / --/ --'}</IonLabel>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M19.5 4H18.5V2H16.5V4H8.5V2H6.5V4H5.5C4.39 4 3.51 4.9 3.51 6L3.5 20C3.5 21.1 4.39 22 5.5 22H19.5C20.6 22 21.5 21.1 21.5 20V6C21.5 4.9 20.6 4 19.5 4ZM19.5 20H5.5V10H19.5V20ZM19.5 8H5.5V6H19.5V8ZM9.5 14H7.5V12H9.5V14ZM13.5 14H11.5V12H13.5V14ZM17.5 14H15.5V12H17.5V14ZM9.5 18H7.5V16H9.5V18ZM13.5 18H11.5V16H13.5V18ZM17.5 18H15.5V16H17.5V18Z" fill="black" />
                            </svg>
                          </div>
                          <div className='formDate' onClick={() => clickShowDatePickerEnd()}>
                            <IonLabel>{timeEnd ? timeEnd : '-- : -- --'}</IonLabel>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.5 17C11.5 17.55 11.95 18 12.5 18C13.05 18 13.5 17.55 13.5 17C13.5 16.45 13.05 16 12.5 16C11.95 16 11.5 16.45 11.5 17ZM11.5 3V7H13.5V5.08C16.89 5.57 19.5 8.47 19.5 12C19.5 15.87 16.37 19 12.5 19C8.63 19 5.5 15.87 5.5 12C5.5 10.32 6.09 8.78 7.08 7.58L12.5 13L13.91 11.59L7.11 4.79V4.81C4.92 6.45 3.5 9.05 3.5 12C3.5 16.97 7.52 21 12.5 21C17.47 21 21.5 16.97 21.5 12C21.5 7.03 17.47 3 12.5 3H11.5ZM18.5 12C18.5 11.45 18.05 11 17.5 11C16.95 11 16.5 11.45 16.5 12C16.5 12.55 16.95 13 17.5 13C18.05 13 18.5 12.55 18.5 12ZM6.5 12C6.5 12.55 6.95 13 7.5 13C8.05 13 8.5 12.55 8.5 12C8.5 11.45 8.05 11 7.5 11C6.95 11 6.5 11.45 6.5 12Z" fill="black" />
                            </svg>
                          </div>
                        </div>
                        <div className='icon-last-end'>
                          To
                        </div>
                      </div>
                      <div className='map-detail-booking'>
                        <div className='localtion-to'>
                          ---------------------
                        </div>
                        <div>
                          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.52 20.43V22.4501C15.53 22.25 17.36 21.4501 18.84 20.24L17.42 18.81C16.31 19.67 14.98 20.25 13.52 20.43Z" fill="black" />
                            <path d="M4.53003 12.5C4.53003 8.45005 7.56003 5.09005 11.48 4.57005V2.55005C6.45003 3.08005 2.53003 7.34005 2.53003 12.5C2.53003 17.66 6.45003 21.92 11.48 22.4501V20.43C7.56003 19.91 4.53003 16.55 4.53003 12.5Z" fill="black" />
                            <path d="M20.45 11.5H22.47C22.27 9.49005 21.47 7.66005 20.26 6.18005L18.83 7.61005C19.69 8.71005 20.27 10.04 20.45 11.5Z" fill="black" />
                            <path d="M18.84 4.76005C17.36 3.55005 15.52 2.75005 13.52 2.55005V4.57005C14.98 4.75005 16.31 5.33005 17.42 6.19005L18.84 4.76005Z" fill="black" />
                            <path d="M18.83 17.4L20.26 18.82C21.47 17.34 22.27 15.51 22.47 13.5H20.45C20.27 14.96 19.69 16.29 18.83 17.4Z" fill="black" />
                            <path d="M16.5 11.6C16.5 9.11005 14.6 7.50005 12.5 7.50005C10.4 7.50005 8.50003 9.11005 8.50003 11.6C8.50003 13.26 9.83003 15.23 12.5 17.5C15.17 15.23 16.5 13.26 16.5 11.6ZM12.5 12.5C11.91 12.5 11.43 12.02 11.43 11.43C11.43 10.84 11.91 10.36 12.5 10.36C13.09 10.36 13.57 10.84 13.57 11.43C13.57 12.02 13.09 12.5 12.5 12.5Z" fill="black" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {showStartDatePickerStart && (
                      <>
                        <div className="ion-datetime-overlay" onClick={() => setShowStartDatePickerStart(false)}></div>
                        <div className="ion-datetime-popup">
                          <IonDatetime
                            value={startDate}
                            onIonChange={(e: any) => valueDateStart(e)}
                            onBlur={() => setShowStartDatePickerStart(false)}
                          />
                        </div>
                      </>
                    )}
                    {showStartDatePickerEnd && (
                      <>
                        <div className="ion-datetime-overlay" onClick={() => setShowStartDatePickerStart(false)}></div>
                        <div className="ion-datetime-popup">
                          <IonDatetime
                            value={startDate}
                            onIonChange={(e: any) => valueDateEnd(e)}
                            onBlur={() => setShowStartDatePickerEnd(false)}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="billContainer">
                  <div className="billheader">
                    <span>
                      Extra service <span className="required">*</span>
                    </span>
                    <IonRadioGroup value="end">
                      <IonRadio value="end" labelPlacement="end">
                      </IonRadio>
                    </IonRadioGroup>
                  </div>
                  <div className="service-section">
                    <div className="Billservice-item">
                      <div className='imgchainuoc'>
                        <img src="/chainuoc.png" alt="Water Bottle" />
                      </div>
                      <div className="service-details">
                        <h3>Water</h3>
                        <p>Water bottle - 500ml</p>
                        <span>$2.00</span>
                      </div>
                      <div className="quantity-control">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                      </div>
                      <button className="remove-btn">x</button>
                    </div>
                  </div>
                  <div className="service-info">
                    <h4>Service Information:</h4>
                    <p>
                      Base Fee: <span>$3.00</span>
                    </p>
                    <p>
                      Economy Car: <span>$1.00/km</span>
                    </p>
                    <p>
                      Kilometer: <span>10km</span>
                    </p>
                    <p>
                      Minute: <span>15'</span>
                    </p>
                    <h4>Additional Services:</h4>
                    <p>
                      Drink Service: <span>$2.00</span>
                    </p>
                    <h4>
                      Total: <span>$27.00</span>
                    </h4>
                  </div>
                  <div className="payment-section">
                    <label>
                      Payment <span className="required">*</span>
                    </label>
                    <div className="payment-option">
                      <div className='momo'>
                        <img src="/momo.png" alt="Momo" />
                        <span>Momo</span>
                      </div>
                      <IonRadioGroup value="end">
                        <IonRadio value="end" labelPlacement="end">
                        </IonRadio>
                      </IonRadioGroup>
                    </div>
                  </div>
                  <div className="contact-info">
                    <h4>
                      Contact information <span className="required">*</span>
                    </h4>
                    <form>
                      <div className="user-card-details">
                        <div>
                          <label htmlFor="">Full name</label>
                          <input
                            type="text"
                            className="user-input"
                            placeholder="Full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="">Number phone</label>
                          <div className='user-card-details-under'>
                            <div className="user-input inputnumber" >
                              <img src="/VietNam.png" alt="" />
                              <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L5.5 5.5L10 1" stroke="#434343" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                            </div>
                            <input type="text" className="user-input" placeholder="+84" />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="">Email</label>
                          <input
                            type="text"
                            className="user-input"
                            placeholder="Full name"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <button className="continue-btn" onClick={() => window.location.href = '/success'}>Continue »</button>
                </div>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent >
    </IonPage >
  )
};

export default Page;
