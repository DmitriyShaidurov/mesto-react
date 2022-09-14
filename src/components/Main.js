import profileIntro from '../images/profile-intro.svg';
import addButton from '../images/addbutton.svg'
import closeIcon from '../images/CloseIcon.svg'

import EditAvatarPopup from './EditAvatarPopup'


function Main(props) {

  /* const handleEditAvatarClick = () => {
    const popupEditAvatar = document.querySelector('#popupEditAvatar')
    popupEditAvatar.classList.add('popup_opened')
  } */

  return (
    <main className="content">
      <section className='profile'>
        <button type="button" className="profile__Ava-btn" onClick={props.onEditAvatar}>
          <img src="#" alt="Аватар" className="profile__logo" />
        </button>

      </section>
      
      <section class="elements">

      </section>

           


    </main>)
}


export default Main

