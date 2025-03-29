"use client"

import Navigation from '@/components/Navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const products = [
  {
    name: 'Bread',
    description: 'Our freshly baked bread comes in various varieties including white, whole wheat, multigrain, and specialty flavors.',
    price: '8,000 - 15,000 UGX',
    imageUrl: '/images/bread.jpg',
    categories: ['Daily Fresh', 'Breakfast']
  },
  {
    name: 'Custom Cakes',
    description: 'Beautiful custom-designed cakes for weddings, birthdays, anniversaries, and special occasions. Available in various flavors and sizes.',
    price: '50,000 - 1,000,000 UGX',
    imageUrl: '/images/cake.jpg',
    categories: ['Special Order', 'Celebration']
  },
  {
    name: 'Doughnuts',
    description: 'Soft and fluffy doughnuts with various toppings and fillings. Perfect for breakfast or afternoon snacks.',
    price: '5,000 - 15,000 UGX',
    imageUrl: '/images/doughnuts.jpg',
    categories: ['Daily Fresh', 'Snacks']
  },
  {
    name: 'Cookies',
    description: 'Delicious cookies in classic and unique flavors. Available individually or in gift boxes.',
    price: '3,000 - 8,000 UGX',
    imageUrl: '/images/cookies.jpg',
    categories: ['Daily Fresh', 'Snacks']
  },
  {
    name: 'Muffins',
    description: 'Freshly baked muffins in various flavors including chocolate chip, blueberry, and banana nut.',
    price: '3,000 - 8,000 UGX',
    imageUrl: '/images/muffins.jpg',
    categories: ['Daily Fresh', 'Breakfast']
  },
  {
    name: 'Hot Dogs',
    description: 'Delicious hot dogs made with premium ingredients and fresh baked buns.',
    price: '10,000 - 25,000 UGX',
    imageUrl: '/images/hotdog.jpg',
    categories: ['Savory', 'Snacks']
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function Products() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Products</h2>
            <p className="mt-4 text-lg text-gray-500">
              Discover our wide range of freshly baked goods, made with love and the finest ingredients
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
          >
            {products.map((product) => (
              <motion.div
                key={product.name}
                variants={itemVariants}
                whileHover={{ scale: 1.12 }}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-square w-full overflow-hidden rounded-t-2xl">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={900}
                    height={900}
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      <Link href="/contact">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {product.categories.map((category) => (
                        <span
                          key={category}
                          className="inline-flex items-center rounded-full bg-rose-100 px-2 py-1 text-xs font-medium text-rose-700"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 text-sm text-gray-500">{product.description}</p>
                  </div>
                  <p className="mt-4 text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Custom Orders</h3>
            <p className="mt-4 text-lg text-gray-500">
              Looking for something special? We take custom orders for any occasion.
            </p>
            <div className="mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href="/contact"
                  className="inline-block rounded-md bg-rose-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                >
                  Contact Us for Custom Orders
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 border-t border-gray-200 pt-16"
          >
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center">Delivery Information</h3>
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-500">
                We offer delivery services to all customers within Kampala and the central region.
                Contact us for delivery rates and availability in your area.
              </p>
              <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <motion.div
                  whileHover={{ scale: 1.12 }}
                  className="rounded-lg bg-gray-50 px-6 py-8"
                >
                  <dt className="text-base font-semibold text-gray-900">Delivery Areas</dt>
                  <dd className="mt-3 text-sm text-gray-500">Kampala and Central Region</dd>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.12 }}
                  className="rounded-lg bg-gray-50 px-6 py-8"
                >
                  <dt className="text-base font-semibold text-gray-900">Delivery Time</dt>
                  <dd className="mt-3 text-sm text-gray-500">Please contact us for delivery schedules and timings</dd>
                </motion.div>
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
} 