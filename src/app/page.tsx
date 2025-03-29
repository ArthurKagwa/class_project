import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";

const products = [
  {
    name: "Bread",
    description: "Fresh, artisanal bread baked daily",
    price: "8,000 - 15,000 UGX",
    imageUrl: "/images/bread.jpg"
  },
  {
    name: "Custom Cakes",
    description: "Beautiful custom cakes for special occasions",
    price: "50,000 - 1,000,000 UGX",
    imageUrl: "/images/cake.jpg"
  },
  {
    name: "Doughnuts",
    description: "Delicious, freshly made doughnuts",
    price: "5,000 - 15,000 UGX",
    imageUrl: "/images/doughnuts.jpg"
  },
  {
    name: "Cookies & Muffins",
    description: "Perfect treats for any time of day",
    price: "3,000 - 8,000 UGX",
    imageUrl: "/images/cookies.jpg"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-rose-100/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Sweet Bliss Bakery Enterprise
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Providing exceptional baked goods that exceed expectations in taste, quality, and presentation. 
              Located in Kampala, Uganda, we specialize in custom cakes, pastries, and bread.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-rose-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
              >
                Order Now
              </Link>
              <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <Image
                src="/images/hero-bakery.jpg"
                alt="Sweet Bliss Bakery"
                width={1000}
                height={600}
                className="w-[76rem] rounded-md bg-gray-50 shadow-xl ring-1 ring-gray-400/10"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Products</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Discover our wide range of delicious baked goods
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {products.map((product) => (
              <article key={product.name} className="flex flex-col items-start">
                <div className="relative w-full">
                  <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime="2020-03-16" className="text-gray-500">
                      {product.price}
                    </time>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <span className="absolute inset-0" />
                      {product.name}
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">{product.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Company Info */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-rose-600">Established 2025</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About Sweet Bliss
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Sweet Bliss Bakery Enterprise is a partnership business with 8 members, 
              established on March 2nd, 2025. We are licensed under the Uganda Registration Service Bureau (URSB).
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  Vision
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    To become the leading bakery in Uganda up to date and customer friendly bakery services
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  Mission
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    To provide our customers with exceptional baked goods that exceed their expectations in taste, quality and presentation
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  Contact
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    P.O Box 92, Kampala, Uganda<br />
                    Customer Help: 0782181005 / 0752235593<br />
                    Email: sweetbliss@gmail.com
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </main>
  );
}
