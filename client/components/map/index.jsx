const index = ({ cardHover }) => {
  return (
    <div className="w-full md:w-5/12">
      {cardHover === 1 && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111643.70464485248!2d-80.96486949219151!3d29.020963517258767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7292b5700b65b%3A0xc1bb3239363bc87c!2sNew%20Smyrna%20Beach%2C%20FL%2C%20USA!5e0!3m2!1sen!2sbd!4v1690303903691!5m2!1sen!2sbd"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl w-full h-full"
        ></iframe>
      )}
      {cardHover === 2 && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111701.42412635511!2d-80.95816262767246!3d28.967525608583124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7189df1428a2d%3A0xab43b4b915a75d3d!2sEdgewater%2C%20FL%2C%20USA!5e0!3m2!1sen!2sbd!4v1690304086604!5m2!1sen!2sbd"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl w-full h-full"
        ></iframe>
      )}
      {cardHover === 3 && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111701.42412635511!2d-80.95816262767246!3d28.967525608583124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7189df1428a2d%3A0xab43b4b915a75d3d!2sEdgewater%2C%20FL%2C%20USA!5e0!3m2!1sen!2sbd!4v1690304086604!5m2!1sen!2sbd"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl w-full h-full"
        ></iframe>
      )}
    </div>
  );
};

export default index;
