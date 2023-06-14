import ArrowRight from '../../../icons/Arrow-right.svg';
import s from './SubmitButton.module.scss';

export const SubmitButton = () => {
  return (
    <div className={s.submitbutton__wrapper}>
      <input className={s.submitbutton__submit} type="submit" />
      <p className={s.submitbutton__text}>Submit</p>
    </div>
  );
}
