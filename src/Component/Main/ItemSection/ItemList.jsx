import { styled } from "styled-components";
import Item from "./Item";

const FrameItemList = styled.div`
  width: 1400px;

  margin: 50px auto 0;
`;
const WrapItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 400px;
  gap: 50px;

  width: 100%;

  &>div {
    &>.wrapImg {
      width: 100%;
      height: 80%;
      &>img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &>.wrapInfo {
      &>.top {
        display: flex;
        justify-content: center;

        width: fit-content;
        &>h4 {
          width: fit-content;
          font-size: 21px;
          font-weight: normal;
          margin-bottom: 10px;
        }
      }
      &>.bottom {
        justify-content: space-between;
        &>.price {
          font-family: pretendard;
          font-weight: bold;
        }
        &>.delivery {
          display: flex;
          justify-content: center;
          align-items: center;

          width: fit-content;
          padding: 2px;
          margin-top: 10px;

          color: #F67D21;
          border: 1px solid #F67D21;
          font-size: 12px;
        }
      }
    }
  }
`;

const ItemList = props => {
  return (
    <FrameItemList>
      <WrapItems>
        {props.itemList.map((item, index) => {
          const { category, image, title, price, freeDelivery } = item;
          return (<Item category={category} image={image} title={title} price={price} freeDelivery={freeDelivery} viewCategory={props.viewCategory} />)
        })}
      </WrapItems>
    </FrameItemList>
  )
}
export default ItemList