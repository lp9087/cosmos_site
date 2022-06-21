import { Fragment } from 'react';
import Link from 'next/link';

import { HeroBG } from './HeroBG';

export const PageHeader = ({ title, breadcrumbs = [], actionTitle, onAction }) => {
  return (
    <div className="relative flex h-[600px] -mt-20 2xl:-mt-[120px] text-white overflow-hidden">
      <HeroBG className="h-[624px]" />
      <div className="container pt-52 flex-col h-full mx-auto">
        <div className="w-5/12">
          <span className="text-xs 2xl:text-sm font-medium tracking-[0.08em] uppercase">
            {breadcrumbs.map(({ title, link }, idx) =>
              link ? (
                <Fragment key={idx}>
                  <Link href={link}>
                    <a>{title}</a>
                  </Link>
                  <span> / </span>
                </Fragment>
              ) : (
                <span key={idx} className="text-[#c4c4c4]">
                  {title}
                </span>
              )
            )}
          </span>
          <h2 className="mt-6 text-[40px] font-bold !leading-[1.2] tracking-wide">
            {title}
          </h2>
          {actionTitle && (
            <button
              className="px-5 py-3 mt-10 font-semibold uppercase rounded-3xl bg-brand"
              onClick={onAction}
            >
              {actionTitle}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
