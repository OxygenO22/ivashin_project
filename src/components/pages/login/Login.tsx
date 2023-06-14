import { MainTitle } from '../../ui/mainTitle/MainTitle';
import { Subtitle } from '../../ui/subtitle/Subtitle';
import s from './Login.module.scss';

export const Login = () => {
  return (
    <div className={s.login__wrapper}>
      <div className={s.login__inner}>
        <div className={s.login__innerLeft}>
          <MainTitle />
          <Subtitle />
        </div>
        <div className={s.login__innerRight}>Right</div>
      </div>
    </div>
  );
}
