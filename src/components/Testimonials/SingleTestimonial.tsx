import { Testimonial } from "@/types/testimonial";

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { name, content } = testimonial;

  return (
    <div className="w-full">
      <div className="rounded-sm bg-white p-8 gap-y-5 flex flex-col shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8">
        <div className="w-full">
          <h2 className="mb-1 border-b border-gray-500 text-lg font-semibold text-dark dark:text-gray-500 lg:text-base xl:text-lg">
            {name}
          </h2>
        </div>
        <p className="mb-8 pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
          {content}
        </p>
      </div>
    </div>
  );
};

export default SingleTestimonial;
