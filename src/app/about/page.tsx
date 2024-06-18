import Image from 'next/image'
import { FC } from 'react'

export const metadata = {
  title: 'About Page',
  description: 'Learn more about us',
}

const AboutPage: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-10 bg-gray-50 min-h-screen">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600 mt-4">
          Discover our journey and mission.
        </p>
      </header>

      <main className="max-w-4xl text-center space-y-8">
        <section className="flex flex-col lg:flex-row lg:space-x-10 space-y-6 lg:space-y-0">
          <div className="lg:w-1/2 w-full flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our journey began with a simple idea: to create meaningful digital
              experiences that resonate with users. Over the years, we have
              grown into a dynamic team of professionals dedicated to delivering
              exceptional solutions that drive results and make a difference.
            </p>
          </div>
          <div className="lg:w-1/2 w-full relative h-64">
            <Image
              src="https://images.unsplash.com/photo-1718554517666-2978ede88574?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our Story"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>
        </section>

        <section className="flex flex-col lg:flex-row lg:space-x-10 space-y-6 lg:space-y-0">
          <div className="lg:w-1/2 w-full relative h-64">
            <Image
              src="https://images.unsplash.com/photo-1718554517666-2978ede88574?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our Mission"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="lg:w-1/2 w-full flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our mission is to create impactful digital solutions that not only
              meet the needs of our clients but also exceed their expectations.
              We strive to innovate, inspire, and transform ideas into realities
              that benefit both our clients and their communities.
            </p>
          </div>
        </section>
      </main>

      <div className="text-center mt-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h3>
        <p className="text-gray-600 text-lg mb-6">
          Have any questions? We&rsquo;d love to hear from you.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  )
}

export default AboutPage
