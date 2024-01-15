"use client";
import  Image  from 'next/image';
import Rating from '@mui/material/Rating';
import { truncateText } from "@/utils/truncateText"
import { formatPrice } from '@/utils/formatPrice'

interface ProductCardProps{
  data: any
}

const ProductCard: React.FC<ProductCardProps> = ({data}) => {

  const productRating = data.reviews.reduce((acc:number, item: any) => acc + item?.rating, 0) / data.reviews.length;


  return (
    <div
      className="
    col-span-1 
    cursor-pointer
    border-[1.2px]
  border-slate-200
  bg-slate-50 
    p-2
    transition
    hover:scale-105
    text-center"
    >
      <div
        className="
        flex
        flex-col
        items-center
        w-full
        gap-1"
      >
        <div className="aspect-square overflow-hidden relative w-full">
          <Image fill 
          src={data?.images?.[0]?.image} 
          className="w-full h-full object-contain" 
          alt={data?.name} />
        </div>
        <div className='mt-4'>{truncateText(data?.name)}</div>
        <div>
          <Rating
          name="simple-controlled"
          value={productRating} readOnly
          />
        </div>
        <div>{data.reviews.length} reviews</div>
        <div className='font-semibold'>{formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
