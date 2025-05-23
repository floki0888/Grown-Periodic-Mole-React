import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Grown Periodic Mole</title>
        <meta property="og:title" content="Grown Periodic Mole" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">#home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">#services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">#about</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">#contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">Services</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">About</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Contact Us</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">View Home</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Contact Us</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110">
              Welcome to our Height Safety system company
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">
              Explore our range of Height Safety services
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Learn more about our company and values
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">
              Get in touch with us for inquiries or quotes
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">Main action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Secondary action</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">
              Medium length hero headline goes here
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118">Professional Installation</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">Tailored Solutions</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120">Reliable Service</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121">
              Expert installation of height safety systems
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122">
              Customized solutions for every project
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123">
              Experienced team with a proven track record
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Contact Us</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Contact us today to discuss your height safety needs and find out
              how we can help you stay safe while working at heights.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126">
              Ready to ensure safety at heights?
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127">Height Safety Equipment</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128">Certified Installations</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129">Regular Inspections</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130">
              We provide a wide range of high-quality height safety equipment to
              ensure the safety of workers at all times.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Our team consists of certified professionals who ensure the proper
              installation of height safety systems for maximum effectiveness.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132">
              We offer regular inspections and maintenance services to guarantee
              that your height safety system is always in top condition.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text141">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text142">$99</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text143">$149</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text144">$199</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text145">Sign Up Now</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text146">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text147">$999</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Get Started</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text149">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text150">$1499</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text151">Contact Us</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text152">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text153">$1999</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text155">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text156">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text157">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text158">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text159">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text160">24/7 Customer Support</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text161">
              Access to all height safety equipment
            </span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text162">Monthly Safety Inspections</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text163">Dedicated Account Manager</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text164">Customized Safety Plans</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text165">Quarterly Training Sessions</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text166">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text167">On-site Risk Assessment</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text168">Emergency Response Team</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text169">Annual Height Safety Audits</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text170">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text171">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text174">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text181">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text183">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text184">Initial Consultation</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text185">Customized Solution</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text186">Professional Installation</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text187">Comprehensive Testing</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text188">
              We start by understanding your height safety needs and
              requirements.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189">
              We tailor a height safety system that fits your specific needs and
              budget.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text190">
              Our experienced team installs the height safety system with
              precision and efficiency.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text191">
              We conduct thorough testing to ensure the system meets all safety
              standards.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text192">
              Great service and attention to detail. The team at Height Safety
              Co. ensured our project was completed safely and efficiently.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text193">
              Professional and reliable company. Their expertise in height
              safety systems made a significant difference in our project
              outcomes.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text194">
              Impressed with the quality of work and dedication shown by Height
              Safety Co. Would highly recommend their services.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text195">
              Exceptional customer service and top-notch safety solutions.
              Height Safety Co. exceeded our expectations.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text196">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text197">Customer Feedback</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text198">John Smith</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199">Sarah Johnson</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text200">Michael Brown</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text201">Emily Davis</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text202">Construction Manager</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text203">Site Supervisor</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text204">Project Manager</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text205">Safety Officer</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text207">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text208">Sydney Office</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text209">Melbourne Office</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text210">
              123 Street Name, Sydney, NSW 2000
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211">
              456 Street Name, Melbourne, VIC 3000
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text212">Link 1</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text213">Link 2</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text214">Link 3</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text215">Link 4</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text216">Link 5</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text217">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
