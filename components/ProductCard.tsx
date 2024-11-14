// hiển thị thông tin về sản phẩm dưới dạng thẻ sản phẩm
"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";

// ProductType:chứa thông tin về sản phẩm(ID, tên, giá, hình ảnh, và danh mục.) 
interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps ) => {
  return (
    <Link
      href={`/products/${product._id}`}
      className="w-[260px] flex flex-col gap-3"
    >
      <Image
        src={product.media[0]}
        alt="product"   
        width={260}
        height={300}
        className="h-[371px] object-cover shadow-2xl"
      />
      {/* Chứa tiêu đề và danh mục của sản phẩm. */}
      <div>
        <p className="text-base-bold">{product.title}</p>
        <p className="text-small-medium text-grey-2 mt-1">{product.category}</p>
      </div>
      
       {/*chứa giá sản phẩm và biểu tượng yêu thích (nếu có) */}
      <div className="flex justify-between ">
        <p className="text-body-bold">{product.price}đ</p>
        <HeartFavorite product={product} updateSignedInUser={updateSignedInUser} />
      </div>
    </Link>
  );
};

export default ProductCard;