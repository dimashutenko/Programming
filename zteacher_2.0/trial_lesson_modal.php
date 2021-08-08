<div class="modal fade bg-dark" tabindex="-1" role="dialog" id="trial-lesson-modal">
  <div class="modal-dialog"> <!-- role="document" -->
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Запис на пробне заняття</h4>
        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body modal-body-lg">
        <form role="form" class="needs-validation" novalidate method="POST" action="./php/mail.php" id="trial-lesson-form">
          <input type="hidden" name="_token" value="">
          <div class="form-group">
            <div>
              <label for="form-input-user-name" class="special-label">Ім'я *</label>
              <input type="text" class="form-control special-input" id="form-input-user-name" name="user_name" placeholder="" required="true">
              <!-- <div class="invalid-feedback">Будь ласка, введіть ваше ім'я</div> -->
            </div>
          </div>
          <div class="form-group">
            <div>
              <label for="form-input-user-phone" class="special-label">Телефон *</label>
              <input type="text" class="form-control special-input" id="form-input-user-phone" name="user_name" placeholder="" required="true">
              <!-- <div class="invalid-feedback">Будь ласка, введіть ваш телефон</div> -->
            </div>
          </div>
          <div class="form-group">
            <div>
              <label for="form-input-user-course" class="special-label">Курс</label>
              <select id="choices-multiple-remove-button" placeholder="Виберіть з переліку" name="products-select[]" multiple>
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
          </div>
          <div class="form-group">
            <div>
              <label for="form-input-user-messanger" class="special-label">Зв’язатись через ?</label>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="form-check-input-messanger" id="user-viber" name="user_viber">
                <label class="form-check-label" for="user-viber">Viber</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="form-check-input-messanger" id="user-telegram" name="user_telegram">
                <label class="form-check-label" for="user-telegram">Telegram</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="form-check-input-messanger" id="user-whatsapp" name="user_whatsapp">
                <label class="form-check-label" for="user-whatsapp">WhatsApp</label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="justify-content-center align-items-center">
              <input type="checkbox" class="input" id="user_agreement" checked="true" required="true" name="user_write">
              <label class="label" for="user_agreement" style="margin-left: 0.5rem;">Згода на обробку персональних даних *</label>
              <div class="invalid-feedback w-100"> Ви маєте поговдитись, щоб ми обробили вашу заявку </div>
            </div>
          </div>
          <div class="form-group">
              <div class="justify-content-center">
                  <button type="submit" class="btn btn-primary">Надіслати</button>
              </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
      

      