import React from "react";
import { Link } from "react-router-dom";

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 shrink-0 text-green-600 mr-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

export default function PricingCard({
  title,
  description = [],
  pricing = [],
  buttonLabel = "Book now",
  buttonTo = "/contact-me",
}) {
  const descriptionItems = Array.isArray(description)
    ? description
    : description
      ? [description]
      : [];

  return (
    <div className="w-full h-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col">
      <h3 className="mb-4 text-xl font-semibold text-gray-900">{title}</h3>

      {descriptionItems.length > 0 ? (
        <ul className="mb-5 space-y-2 text-sm text-gray-700 list-disc list-inside">
          {descriptionItems.map((item, index) => (
            <li key={`${title}-desc-${index}`} className="flex items-start">
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="space-y-2 mb-6">
        {pricing.map((item) => (
          <div
            key={`${title}-${item.label}-${item.value}`}
            className="flex items-baseline gap-2 text-gray-900"
          >
            <span className="text-sm font-medium text-gray-600">
              {item.label}
            </span>
            <span className="text-2xl font-bold tracking-tight">
              ${item.value}
            </span>
          </div>
        ))}
      </div>

      <Link to={buttonTo} className="mt-auto">
        <button
          type="button"
          className="w-full text-white bg-green-600 hover:bg-green-700 border border-transparent font-medium rounded-md text-sm px-4 py-2.5 focus:outline-none focus:ring-4 focus:ring-green-300 transition"
        >
          {buttonLabel}
        </button>
      </Link>
    </div>
  );
}