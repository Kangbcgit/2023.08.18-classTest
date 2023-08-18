const Item = props => {
  const { category, image, title, price, freeDelivery } = props;
  const render = (
    <>
      <div>
        <div className="wrapImg">
          <img src={image} alt="" />
        </div>
        <div className="wrapInfo">
          <div className="top">
            <h4>{title}</h4>
          </div>
          <div className="bottom">
            <span className="price">{price} 원</span>
            {freeDelivery ? (<div className="delivery">무료 배송</div>) : null}
          </div>
        </div>
      </div>
    </>
  );
  return (
    <>
      {props.viewCategory ? (props.viewCategory === category ? render : null) : render}
    </>
  )
}
export default Item