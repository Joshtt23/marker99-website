'use client';

import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { DefaultSeo } from 'next-seo';
import metaData from '../../next-seo.config';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Select } from './ui/select';
import { Textarea } from './ui/textarea';
import { useDropzone } from 'react-dropzone';

const inter = Inter({ subsets: ['latin'] });

const JobApplication = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [file, setFile] = useState(null);

  const handleFormToggle = () => {
    setFormVisible(!formVisible);
  };

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.pdf,.doc,.docx',
  });

  return (
    <section className="bg-gray-200 p-8 text-center">
      <h1 className="text-3xl font-bold">
        Have Experience in Food Service?
        <br />
        We&apos;re Hiring!
      </h1>
      <Button
        onClick={handleFormToggle}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        APPLY TODAY!
      </Button>
      {formVisible && (
        <form id="jobform" className="mt-4">
          <div className="mb-4">
            <Label className="block text-left">
              Name<span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              name="name"
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div className="mb-4">
            <Label className="block text-left">
              Email Address<span className="text-red-500">*</span>
            </Label>
            <Input
              type="email"
              name="email"
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div className="mb-4">
            <Label className="block text-left">Phone Number</Label>
            <Input
              type="text"
              name="phone"
              className="w-full border rounded p-2"
            />
          </div>
          <div className="mb-4">
            <Label className="block text-left">
              Job Positions<span className="text-red-500">*</span>
            </Label>
            <Select
              name="position"
              className="w-full border rounded p-2"
              required
            >
              <option value="">Select One</option>
              <option value="Waiter">Waiter</option>
              <option value="Host">Host</option>
              <option value="Bartender">Bartender</option>
              <option value="Cook">Cook</option>
              <option value="Janitor">Janitor</option>
              <option value="Dishwasher">Dishwasher</option>
            </Select>
          </div>
          <div className="mb-4">
            <Label className="block text-left">Years of Experience</Label>
            <Input
              type="number"
              name="experience"
              className="w-full border rounded p-2"
              min="0"
              max="50"
            />
          </div>
          <div className="mb-4">
            <Label className="block text-left">
              Availability<span className="text-red-500">*</span>
            </Label>
            <Select
              name="availability"
              className="w-full border rounded p-2"
              required
            >
              <option value="">Select One</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
            </Select>
          </div>
          <div className="mb-4">
            <Label className="block text-left">Message</Label>
            <Textarea
              name="message"
              className="w-full border rounded p-2"
              rows="4"
              maxLength="180"
            />
          </div>
          <div className="mb-4">
            <Label className="block text-left">Upload Resume/CV</Label>
            <div
              {...getRootProps({
                className: 'w-full border rounded p-2 cursor-pointer',
              })}
              className="flex flex-col items-center justify-center"
            >
              <input {...getInputProps()} />
              <p className="text-center">
                {file
                  ? file.name
                  : 'Drag & drop your resume here, or click to select a file'}
              </p>
            </div>
          </div>
          <Button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Submit
          </Button>
        </form>
      )}
    </section>
  );
};

export default JobApplication;
