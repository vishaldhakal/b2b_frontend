"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Loader2, AlertCircle, ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default function CategoryDetailsPage() {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [information, setInformation] = useState([]);
  const [contentItems, setContentItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategoryDetails();
  }, [slug]);

  const fetchCategoryDetails = async () => {
    try {
      const [
        categoryResponse,
        faqsResponse,
        informationResponse,
        contentItemsResponse,
      ] = await Promise.all([
        fetch(`${API_BASE_URL}/api/categories/${slug}/`),
        fetch(`${API_BASE_URL}/api/categories/${slug}/faqs/`),
        fetch(`${API_BASE_URL}/api/categories/${slug}/information/`),
        fetch(`${API_BASE_URL}/api/categories/${slug}/content-items/`),
      ]);

      if (
        !categoryResponse.ok ||
        !faqsResponse.ok ||
        !informationResponse.ok ||
        !contentItemsResponse.ok
      ) {
        throw new Error("Failed to fetch category details");
      }

      const [categoryData, faqsData, informationData, contentItemsData] =
        await Promise.all([
          categoryResponse.json(),
          faqsResponse.json(),
          informationResponse.json(),
          contentItemsResponse.json(),
        ]);

      setCategory(categoryData);
      setFaqs(faqsData);
      setInformation(informationData);
      setContentItems(contentItemsData.content_items);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/business-registration" passHref>
          <Button variant="link" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Categories
          </Button>
        </Link>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-indigo-700">
              {category.name}
            </CardTitle>
            <CardDescription>{category.description}</CardDescription>
          </CardHeader>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-indigo-600">
              Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            {information.length > 0 ? (
              information.map((item) => (
                <div key={item.slug} className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">
                No information available for this category.
              </p>
            )}
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-indigo-600">
              Content
            </CardTitle>
          </CardHeader>
          <CardContent>
            {contentItems.length > 0 ? (
              contentItems.map((item) => (
                <Card key={item.slug} className="mb-4">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl font-semibold">
                        {item.title}
                      </CardTitle>
                      <Badge>{item.content_type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{item.content}</p>
                    {item.external_url && (
                      <a
                        href={item.external_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 flex items-center"
                      >
                        View External Content
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-gray-500">
                No content items available for this category.
              </p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-indigo-600">
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            {faqs.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq) => (
                  <AccordionItem key={faq.slug} value={faq.slug}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <p className="text-gray-500">
                No FAQs available for this category.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
