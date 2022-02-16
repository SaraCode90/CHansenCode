import { AiOutlineSetting } from 'react-icons/ai';
import { Button } from 'components';

import css from './style.module.scss';

export const Settings = () => {
  return (
    <Button
      size="2rem"
      borderRadius="50%"
      className={css.button}
      active={!fold}
      className="pc5b"
      onClick={() => setFold(!fold)}
    >
      <AiOutlineSetting size="1.5rem" />
    </Button>
  );
};
