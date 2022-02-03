import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const PHONE_REGEXP = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
const EMAIL_REGEXP =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const ContactModal = ({ isOpen = false, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data);

  useEffect(() => reset(), [isOpen, reset]);

  return (
    <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box flex flex-col gap-3">
        <span className="text-black text-xl font-semibold text-center">
          Заказать обратную связь
        </span>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Как вас зовут?</span>
            </label>
            <input
              type="text"
              placeholder="Иван"
              className={`input input-bordered text-black font-medium
                ${errors.name ? 'input-error' : ''}`}
              {...register('name', { required: true })}
            />
            {errors.name && (
              <label className="label">
                <span className="label-text-alt">Это поле обязательно</span>
              </label>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">
                Контактный телефон (с кодом города):
              </span>
            </label>
            <input
              type="text"
              placeholder="+7 (999) 123 4567"
              className={`input input-bordered text-black font-medium
                ${errors.phone ? 'input-error' : ''}`}
              {...register('phone', {
                required: true,
                pattern: PHONE_REGEXP,
              })}
            />
            {errors.phone && (
              <label className="label">
                <span className="label-text-alt">Неверно указан номер</span>
              </label>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">E-mail:</span>
            </label>
            <input
              type="text"
              placeholder="ivan@yourcorp.ru"
              className={`input input-bordered text-black font-medium
                ${errors.email ? 'input-error' : ''}`}
              {...register('email', { pattern: EMAIL_REGEXP })}
            />
            {errors.email && (
              <label className="label">
                <span className="label-text-alt">Неверно указан e-mail</span>
              </label>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Тема вопроса/комментарий:</span>
            </label>
            <textarea
              className="textarea h-24 textarea-bordered text-black font-medium"
              {...register('comment')}
            />
          </div>
          <div className="modal-action">
            <button className="btn btn-primary" type="submit">
              Отправить
            </button>
            <button className="btn" onClick={onClose}>
              Закрыть
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
