window.addEventListener('DOMContentLoaded', () => {
  const inputImgProfile = document.querySelector('#input-img-profile');
  const formProfile = document.querySelector('#form-profile')
  
  formProfile.addEventListener('click', () => {
    inputImgProfile.click();
  });

  inputImgProfile.addEventListener('change', () => {
    formProfile.submit();
  });

});