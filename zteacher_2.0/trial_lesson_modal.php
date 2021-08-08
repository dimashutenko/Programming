<div class="modal fade bg-dark" tabindex="-1" role="dialog" id="trial-lesson-modal">
  <div class="modal-dialog"> <!-- role="document" -->
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Запис на пробний урок</h4>
        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body modal-body-lg">
        <form role="form" class="needs-validation" novalidate method="POST" action="./php/mail.php" id="trial-lesson-form">
          <input type="hidden" name="_token" value="">
          <div class="form-group">
              <!-- <label class="control-label">Ім'я</label> -->
              <div>
                <input type="text" class="form-control" id="form-input-user-name" name="user_name" placeholder="Ім'я *" required="true">
                <div class="invalid-feedback">Будь ласка, введіть ваше ім'я</div>
              </div>
          </div>
          <div class="w-100"> 
            <select id="choices-multiple-remove-button" placeholder="Виберіть, що вас зацікавило" name="products-select[]" multiple>
              <option value="Загальна англійська">Загальна англійська</option>
              <option value="Розмовна англійська">Розмовна англійська</option>
              <option value="Підготовка до іспитів">Підготовка до іспитів</option>
              <option value="Онлайн марафон по серіалу Dash and Lily">Онлайн марафон по серіалу "Dash and Lily"</option>
              <option value="Курс по серіалу Young Sheldon">Курс по серіалу "Young Sheldon"</option>
              <option value="Вебінари від засновниці школи Nina Zelinska для вчителів">Вебінари від засновниці школи Nina Zelinska для вчителів</option>
              <option value="Курс Подорожі з легкістю">Курс "Подорожі з легкістю"</option>
              <option value="Курс по серіалу Dash and Lily">Курс по серіалу "Dash and Lily"</option>
              <option value="Уроки для юних IT-шників">Уроки для юних IT-шників</option>
              <option value="Гарячі дискусії">Гарячі дискусії</option>
              <option value="Курс з математики та логіки для дітей">Курс з математики та логіки для дітей</option>
            </select>
          </div>
          
          <h5 class="mb-2 mt-3">Як з вами зв'язатись? *</h5>
          <div class="">
            <div class="btn-group" data-bs-toggle="buttons">
              <label class="btn btn-outline-secondary mr-1">
                <input type="radio" name="radio_options" class="radio_communication" id="radio_viber" onclick="display_user_choice(this.id)"> <span class="d-none d-md-inline">Viber</span><i class="d-inline d-md-none fab fa-viber"></i>
              </label>
                        <label class="btn btn-outline-secondary mr-1">
                          <input type="radio" name="radio_options" class="radio_communication" id="radio_telegram" onclick="display_user_choice(this.id)"> <span class="d-none d-md-inline">Telegram</span><i class="d-inline d-md-none fab fa-telegram-plane"></i>
                        </label>
                        <label class="btn btn-outline-secondary mr-1">
                          <input type="radio" name="radio_options" class="radio_communication" id="radio_whatsapp" onclick="display_user_choice(this.id)"> <span class="d-none d-md-inline">WhatsApp</span> <i class="d-inline d-md-none fab fa-whatsapp"></i>
                        </label>
                        <label class="btn btn-outline-secondary mr-1">
                          <input type="radio" name="radio_options" class="radio_communication" id="radio_phone" onclick="display_user_choice(this.id)"> 
                          <i class="fas fa-phone"></i></button>
                        </label>
                        <label class="btn btn-outline-secondary">
                          <input type="radio" name="radio_options" class="radio_communication" id="radio_email" onclick="display_user_choice(this.id)"> 
                          <i class="fas fa-envelope"></i>
                        </label>
                      </div>
                      <div class="invalid-feedback" id="communication-method-not-chosen">
                        Будь ласка, виберіть спосіб зв'язку
                      </div>
                    </div>

                    
                    <div class="form-group mt-2">
                      <input type="text" class="form-control input-for-user-contact d-none" id="user_telegram" name="user_telegram" placeholder="Ваш номер телефону або акаунт в Telegram *">
                      <input type="text" class="form-control input-for-user-contact d-none" id="user_viber" name="user_viber" placeholder="Ваш номер телефону або акаунт у Viber *">
                      <input type="text" class="form-control input-for-user-contact d-none" id="user_whatsapp" name="user_whatsapp" placeholder="Ваш номер телефону або акаунт в WhatsApp *">
                      <input type="phone" class="form-control input-for-user-contact d-none" id="user_phone" name="user_phone" placeholder="Ваш номер телефону *">
                      <input type="email" class="form-control input-for-user-contact d-none" id="user_email" name="user_email" placeholder="Ваш email *">
                      <div class="invalid-feedback"> Введіть контактні дані, будь ласка </div>
                    </div>
                    <!-- <div class="checkbox mt-2">
                      <input type="checkbox" class="input" id="customCheck1" value="Yes" name="user_write">
                      <label class="label" for="customCheck1">Краще написати ніж подзвонити</label>
                    </div> -->
                    <div class="checkbox mt-1">
                      <input type="checkbox" class="input" id="user_agreement" checked="true" required="true" name="user_write">
                      <label class="label mb-0" for="user_agreement">Згода на обробку персональних даних *</label>
                      <div class="invalid-feedback"> Ви маєте поговдитись, щоб ми обробили вашу заявку </div>
                    </div>
                    <div class="form-group mt-4">
                        <div>
                            <button type="submit" class="btn btn-primary">Надіслати</button>
                        </div>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
      

      