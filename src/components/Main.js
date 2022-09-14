import profileIntro from '../images/profile-intro.svg';
import addButton from '../images/addbutton.svg'


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


        <div class="profile__intro">
          <div class="profile__content">
            <div class="profile__title-wrapper">
              <h1 class="profile__title">
              </h1>
              <button class="profile__edit-button" id="profileEditButton" type="button" onClick={props.onEditProfile}>
                <img src={profileIntro} class="profile__edit-button-image" alt="Редактировать" />
              </button>
            </div>
            <p class="profile__text">
            </p>
          </div>


          <button class="profile__add-button" type="button" id="profileImagesAddButton" onClick={props.onEditProfileImages}>
            <img class="profile__add-button-image" src={addButton} alt="Добавить" />
          </button>
        </div>



      </section>

      <section class="elements">

      </section>




    </main>)
}


export default Main

