import s from './BlockTitle.module.scss';

function BlockTitle(props) {
  return (
    <h2 className={props.className}>
        {props.title}
    </h2>
  );
}

export default BlockTitle;