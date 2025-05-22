import React from "react";

const Faq = () => {
  return (
    <div className="flex flex-col w-11/12 mx-auto md:flex-row gap-4 p-4 mt-20">
      <div className="md:w-1/1">
        <img
          src="https://i.ibb.co/XrdhCzmB/6752416.jpg"
          alt=""
          className="rounded-lg shadow"
        />
      </div>
      <div className="md:w-3/4   space-y-4">
     
        <div className="collapse bg-green-50 collapse-arrow  border border-base-300">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm">
            Click the "Sign Up" button at the top right and fill in your details
            to join the community.
          </div>
        </div>

       
        <div className="collapse collapse-arrow bg-green-50 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            How can I find local gardeners near me?
          </div>
          <div className="collapse-content text-sm">
            Use the "Find Gardeners" feature on the homepage to search for
            members in your area by location or specialty.
          </div>
        </div>

        
        <div className="collapse collapse-arrow bg-green-50 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            How do I ask a plant care question?
          </div>
          <div className="collapse-content text-sm">
            Head to the "Ask a Question" section in the community forum and post
            your query — other members and experts will respond!
          </div>
        </div>

     
        <div className="collapse collapse-arrow bg-green-50 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            Can I post my own gardening tips?
          </div>
          <div className="collapse-content text-sm">
            Absolutely! Go to the "Tips & Guides" page and click on "Share Your
            Tip" to contribute your knowledge.
          </div>
        </div>

 
        <div className="collapse collapse-arrow bg-green-50 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            How do I join gardening events or workshops?
          </div>
          <div className="collapse-content text-sm">
            Visit the "Events" section to browse upcoming workshops and
            community meetups. You can RSVP directly from the event page.
          </div>
        </div>


        <div className="collapse collapse-arrow bg-green-50 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            Can I save my favorite plant care guides?
          </div>
          <div className="collapse-content text-sm">
            Yes — click the "Save" icon on any guide or tip, and it'll be added
            to your personal "Favorites" collection in your account.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
