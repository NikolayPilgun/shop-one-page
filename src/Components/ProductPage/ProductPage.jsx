import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { dataProductPage } from "../../data/dataProductPage";
import styles from "./ProductPage.module.css";

function ProductPage() {
	let [pathIndex, setPathIndex] = useState(0);

	const dataPage = useParams().ProductPageId.toLowerCase().split("_");
	const dataPageArr = dataProductPage[dataPage[0]][dataPage[1]];

	const onClickPicture = (index) => {
		setTimeout(() => setPathIndex((pathIndex = index)), 150);
	};

	return (
		<div className={styles.productPage}>
			<div className={styles.header}>
				<h2>ProductPage</h2>
			</div>
			<div className={styles.bigPicture}>
				<img
					src={dataPageArr[pathIndex].path}
					alt={dataPageArr[pathIndex].title}
				/>
			</div>
			<div className={styles.smallPictures}>
				{dataPageArr.map((value, index) => (
					<img
						src={value.path}
						alt={value.title}
						key={value.id}
						onClick={() => onClickPicture(index)}
					/>
				))}
			</div>
			<div className={styles.description}>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
					temporibus aspernatur rem itaque cum eveniet possimus distinctio,
					quisquam excepturi quo dolores odio praesentium quibusdam sapiente
					beatae sit. Optio, ducimus consectetur. Lorem, ipsum dolor sit amet
					consectetur adipisicing elit. Suscipit numquam tempore, nam assumenda
					perspiciatis rem minus distinctio voluptatem placeat quae. Veniam ipsa
					dolorem qui sit provident sunt, sed aut minima! Lorem ipsum, dolor sit
					amet consectetur adipisicing elit. Blanditiis molestias distinctio
					quibusdam a commodi accusamus, maiores rerum mollitia. Veritatis
					excepturi iusto odio quam quo iste minus unde vel eveniet facilis!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
					suscipit dolorem enim voluptatibus facere commodi alias aspernatur
					totam dolor culpa corporis ullam incidunt repudiandae, libero neque ut
					necessitatibus ipsa iste? Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Praesentium voluptates animi aut fugit enim quod
					possimus tenetur! Voluptas et facere sunt vero doloremque esse
					explicabo eum adipisci ut, enim reprehenderit?
				</p>
			</div>
		</div>
	);
}

export default ProductPage;
