import Image from "next/image";

const Location = ({ data }) => {
  return (
    <div className="shadow-sm border rounded-xl p-5 md:p-10 bg-white">
      <p className="text-3xl text-gray-800 font-semibold mb-2">Location</p>
      <p className="mb-5">{data?.itemLocation.placeName}</p>
      {data?.id === 1 && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.2973570993436!2d-80.8589032!3d28.978558300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e72c575edee729%3A0x9bfd33ce783d5d1!2s4849%20Saxon%20Dr%2C%20New%20Smyrna%20Beach%2C%20FL%2032169%2C%20USA!5e0!3m2!1sen!2sbd!4v1690993961320!5m2!1sen!2sbd"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl w-full h-96"
        ></iframe>
      )}
      {data?.id === 2 && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3489.3012433872223!2d-80.8778822!3d29.008070299999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e72c0cbd660b25%3A0xb93809e42fdce219!2s3801%20S%20Atlantic%20Ave%2C%20New%20Smyrna%20Beach%2C%20FL%2032169%2C%20USA!5e0!3m2!1sen!2sbd!4v1690994063738!5m2!1sen!2sbd"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl w-full h-96"
        ></iframe>
      )}
      {data?.id === 3 && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1745.1803281206019!2d-80.8594633!3d28.976682!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e72c56e2033569%3A0x1c10935ba58e3e39!2s5300%20S%20Atlantic%20Ave%2C%20New%20Smyrna%20Beach%2C%20FL%2032169%2C%20USA!5e0!3m2!1sen!2sbd!4v1690994102886!5m2!1sen!2sbd"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl w-full h-96"
        ></iframe>
      )}
    </div>
  );
};

export default Location;
