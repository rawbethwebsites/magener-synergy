-- CreateTable
CREATE TABLE "BlogPost" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "excerpt" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "coverImage" VARCHAR(500),
    "published" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BlogPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Destination" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "country" VARCHAR(100) NOT NULL,
    "slug" VARCHAR(100) NOT NULL,
    "tag" VARCHAR(100) NOT NULL,
    "description" TEXT NOT NULL,
    "highlights" TEXT NOT NULL,
    "image" VARCHAR(500),
    "featured" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Destination_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Testimonial" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "role" VARCHAR(100) NOT NULL,
    "quote" TEXT NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 5,
    "avatar" VARCHAR(500),
    "featured" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Testimonial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inquiry" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(200) NOT NULL,
    "phone" VARCHAR(50),
    "service" VARCHAR(100),
    "message" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Inquiry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BlogPost_slug_key" ON "BlogPost"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Destination_slug_key" ON "Destination"("slug");
