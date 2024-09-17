import SingleBlog from "@/lib/Blog/SingleBlog";
import SectionTitle from "../Common/SectionTitle";
import usData from "@/lib/Blog/usData";

export default function Us() {
  return (
    <section
      id="instructors"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          width="1200px"
          mb="20px"
          title="Sobre Nosotros"
          paragraph="Somos la comunidad líder y centro educativo en skateboarding. Nuestros instructores están certificados por ISCP (Programa Internacional de Certificación de Patinetas), SKATZ (Postura, Patadas, Ejes, Transferencias y Zen), y FDNPP (Federación Deportiva Nacional Peruana de Patinaje)."
          paragraphBottom="Descubre a nuestros instructores expertos"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {usData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
