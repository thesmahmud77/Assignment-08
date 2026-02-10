import React from "react";
import { useLoaderData, useParams } from "react-router";
import NavMenu from "../../../Components/Navbar/NavMenu";
import Footer from "../../../Components/Footer/Footer";
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";

const SingleHomeData = () => {
  const HALoader = useLoaderData();
  const { id } = useParams();
  const HomeParams = parseInt(id);
  const SingleHFilter = HALoader.find((book) => book.id === HomeParams);
  console.log(SingleHFilter);
  const { image, companyName, downloads, ratings } = SingleHFilter;
  return (
    <div>
      <NavMenu></NavMenu>
      <div>
        <div className="card card-side bg-base-100 shadow-sm">
          <figure>
            <img src={image} alt="Movie" />
          </figure>
          <div className="card-body">
            <div className="text-left">
              <h2 className="card-title font-bold text-3xl">{companyName}</h2>
              <p className="mt-1">
                Develop By <spen className="text-[#632EE3]">smahmud77</spen>
              </p>
            </div>
            <div className="card-actions justify-start text-left mt-10 gap-10">
              <div className="flex flex-col items-center justify-start">
                <FaDownload className="text-3xl font-bold text-[#54CF68]" />
                <p>Downloads</p>
                <h1 className="card-title font-bold text-2xl">{downloads}</h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <FaStar className="text-3xl font-bold text-[#FF8811]" />
                <p>Average Ratings</p>
                <h1 className="card-title font-bold text-2xl">{downloads}</h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <BiSolidLike className="text-3xl font-bold text-[#632EE3]" />
                <p>Average Ratings</p>
                <h1 className="card-title font-bold text-2xl">{downloads}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="progressBar flex flex-col items-start gap-5 m-10 w-[100%]">
          {ratings.map((sinRat) => (
            <progress
              className="progress w-{sinRat.counts}"
              value={0}
              max="100"
            ></progress>
          ))}
        </div>
      </div>
      <div className="Description text-left">
        <h1 className="font-bold text-1xl">Description</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          quia molestiae iste. Consequatur quis, vel eius laboriosam ab
          asperiores delectus officiis eligendi ipsam totam voluptatibus autem
          dignissimos? Debitis laudantium nam quo beatae illum. Deserunt libero
          placeat eius expedita error dicta accusamus molestiae officiis
          exercitationem, natus voluptas impedit quas aperiam commodi quos
          corrupti quisquam ullam repellat rerum accusantium soluta et eligendi
          repudiandae explicabo? A, nesciunt? Cupiditate quos voluptatum
          perferendis ducimus, illum aliquam veniam modi itaque numquam voluptas
          architecto assumenda? Vero soluta illo magnam, dolore sequi
          consectetur ullam optio quo voluptates natus alias harum non fugiat
          velit aliquid error rerum commodi repellendus eveniet quam ea
          explicabo, consequuntur officia libero! Neque, corrupti iste illo ipsa
          cum adipisci earum! Nostrum, nemo laudantium. Commodi nulla debitis
          praesentium impedit consectetur dolore tempore itaque eos eligendi, ab
          vero doloribus ex quas modi? In voluptate molestiae dolorem, eos non,
          perferendis omnis quo ea sapiente et neque tempore natus reiciendis,
          debitis dignissimos aliquam adipisci beatae assumenda dolores.
          Quibusdam, voluptatibus quod. Rem tenetur deserunt officiis minima,
          cupiditate animi magni beatae omnis enim libero dolore voluptatibus
          inventore amet iure saepe fugit fugiat, quasi ratione minus architecto
          delectus quaerat nihil corrupti? Magni quaerat quo amet tempora eum
          possimus cumque aliquam? Repellendus eveniet quas quis autem quam,
          officiis similique excepturi minus necessitatibus, quaerat itaque
          voluptatibus nostrum atque laboriosam at. Itaque iste doloribus maxime
          libero id fuga dolor iusto ipsum, delectus ex inventore! Nemo
          accusantium, minus qui culpa suscipit est cum quae officiis magnam
          atque maiores quidem in dolores, quaerat quos vitae doloremque cumque
          consectetur repellendus. Ratione necessitatibus obcaecati nobis modi
          explicabo, harum sequi neque repellat quibusdam! Voluptas laboriosam
          rerum, ab eos culpa cupiditate quia doloribus quibusdam ducimus ut,
          sequi numquam dolorem deleniti eligendi tempore praesentium itaque
          porro. Molestias, explicabo praesentium suscipit modi ducimus
          laudantium deserunt pariatur consectetur libero omnis mollitia
          delectus ipsam doloribus provident saepe! Delectus, dicta. Sequi
          aliquam repellendus repudiandae unde nulla? Perspiciatis atque
          asperiores maiores accusantium suscipit totam adipisci, eligendi
          temporibus nesciunt? Cum temporibus quo voluptatibus consequuntur modi
          eius omnis amet non eum alias, corporis cumque reprehenderit
          perferendis officiis iste ab possimus quia. Reiciendis esse deleniti,
          consequatur facilis sunt eveniet maxime officia, distinctio quo
          numquam quas provident deserunt blanditiis dignissimos maiores,
          quisquam repudiandae aliquid hic harum impedit. Eum autem accusantium
          sequi natus sunt pariatur nesciunt soluta illo repellendus repellat
          animi sapiente hic labore minus vitae, eius, culpa minima. Sed
          officiis deleniti fugiat, repudiandae eligendi porro omnis
          accusantium? Modi neque corporis eius quos facilis consequuntur nisi
          at magnam quis repellendus unde tempora tempore vitae eum autem sed
          odio eligendi molestias minima dolorem velit officia, porro ipsam
          labore? Nihil explicabo inventore tempora eos voluptates rem iusto
          omnis sed. Commodi, consequatur omnis officiis libero temporibus
          laudantium ipsam consequuntur facilis sint. Nisi fugiat cumque modi
          dolores sint ut voluptate animi rem? Cumque ut pariatur minima
          repellat repellendus commodi, eveniet atque nihil et ducimus
          architecto temporibus consequatur quo corporis quod consectetur quis
          rem rerum perspiciatis deserunt est officia facilis! Voluptates, illo
          numquam in fuga molestiae, placeat officiis amet consectetur ipsa enim
          dolorum est adipisci quaerat modi.
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SingleHomeData;
