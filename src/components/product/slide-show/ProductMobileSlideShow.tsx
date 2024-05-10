"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./slideshow.css";

interface Props {
	images: string[];
	title: string;
	className?: string;
}

export const ProducMobiletSlideShow = ({ images, title, className }: Props) => {
	return (
		<div className={`${className}`}>
			<Swiper
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 3000,
					disableOnInteraction: true,
				}}
				modules={[FreeMode, Autoplay, Pagination]}
				className="mySwiper"
			>
				{images.map((image) => (
					<SwiperSlide key={image}>
						<Image
							width={600}
							height={500}
							src={`/products/${image}`}
							alt={title}
							className="object-fill"
							priority
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
