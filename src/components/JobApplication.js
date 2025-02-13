'use client';

import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useDropzone } from 'react-dropzone';
// Import the custom Radix UI Select components
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from './ui/select';

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

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        ['.docx'],
    },
  });

  return (
    <section
      id="job-application"
      className={`bg-customDark text-white p-8 text-center ${inter.className}`}
    >
      <h1 className="text-4xl font-bold mb-4">
        Have Experience in Food Service?
        <br />
        We&apos;re Hiring!
      </h1>
      <Button
        onClick={handleFormToggle}
        className="bg-customGreen text-white py-2 px-4 rounded-lg shadow-md hover:bg-customGreen transition duration-300"
      >
        APPLY TODAY!
      </Button>

      {formVisible && (
        <form
          id="jobform"
          className="mt-8 bg-white text-gray-800 p-8 rounded-lg shadow-md transition-all duration-300 ease-in-out"
        >
          {/* Cancel Button */}
          <div className="flex justify-end">
            <Button
              type="button"
              onClick={handleFormToggle}
              className="mb-4 bg-red-500 text-white py-1 px-3 rounded shadow hover:bg-red-600 transition duration-300"
            >
              Cancel
            </Button>
          </div>

          <div className="mb-4">
            <Label className="block text-left text-lg">
              Name <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              name="name"
              className="w-full border rounded p-2"
              required
            />
          </div>

          <div className="mb-4">
            <Label className="block text-left text-lg">
              Email Address <span className="text-red-500">*</span>
            </Label>
            <Input
              type="email"
              name="email"
              className="w-full border rounded p-2"
              required
            />
          </div>

          <div className="mb-4">
            <Label className="block text-left text-lg">Phone Number</Label>
            <Input
              type="text"
              name="phone"
              className="w-full border rounded p-2"
            />
          </div>

          {/* Job Positions using the custom Radix UI Select */}
          <div className="mb-4">
            <Label className="block text-left text-lg">
              Job Positions <span className="text-red-500">*</span>
            </Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select One" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Waiter">Waiter</SelectItem>
                <SelectItem value="Host">Host</SelectItem>
                <SelectItem value="Bartender">Bartender</SelectItem>
                <SelectItem value="Cook">Cook</SelectItem>
                <SelectItem value="Janitor">Janitor</SelectItem>
                <SelectItem value="Dishwasher">Dishwasher</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-4">
            <Label className="block text-left text-lg">
              Years of Experience
            </Label>
            <Input
              type="number"
              name="experience"
              className="w-full border rounded p-2"
              min="0"
              max="50"
            />
          </div>

          {/* Availability using the custom Radix UI Select */}
          <div className="mb-4">
            <Label className="block text-left text-lg">
              Availability <span className="text-red-500">*</span>
            </Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select One" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Full-Time">Full-Time</SelectItem>
                <SelectItem value="Part-Time">Part-Time</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-4">
            <Label className="block text-left text-lg">Message</Label>
            <Textarea
              name="message"
              className="w-full border rounded p-2"
              rows="4"
              maxLength="180"
            />
          </div>

          <div className="mb-4">
            <Label className="block text-left text-lg">Upload Resume/CV</Label>
            <div
              {...getRootProps()}
              className={`w-full border rounded p-2 cursor-pointer flex flex-col items-center justify-center transition-colors duration-200 ${
                isDragActive ? 'bg-gray-200' : 'bg-white'
              }`}
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
            className="bg-customGreen text-white py-2 px-4 rounded-lg shadow-md hover:bg-customGreen transition duration-300"
          >
            Submit
          </Button>
        </form>
      )}
    </section>
  );
};

export default JobApplication;
