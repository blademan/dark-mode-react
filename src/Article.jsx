import React from 'react';
import moment from 'moment';

const Article = ({ title, date, length, snippet }) => {
 return (
  <section className="wrapper pt-16 tracking-widest">
   <article>
    <h2 className="font-bold py-4  capitalize">{title}</h2>
    <p className="py-1 italic text-sm">
     {moment(date).format('dddd Do, YYYY')} {length} min read
    </p>
    <p className="py-1 text-sm">{snippet}</p>
   </article>
  </section>
 );
};

export default Article;
