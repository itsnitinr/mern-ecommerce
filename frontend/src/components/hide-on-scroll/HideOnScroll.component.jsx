import { useScrollTrigger, Slide } from '@material-ui/core';

export default function HideOnScroll(props) {
  const { children, appear, direction } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide
      appear={appear || false}
      direction={direction || 'down'}
      in={!trigger}
    >
      {children}
    </Slide>
  );
}
