import React, { useCallback, useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchInput, { createFilter } from 'react-search-input'
// import Pagination from '@/app/ui/invoices/pagination';
// import Search from '@/app/ui/search';
// import Table from '@/app/ui/invoices/table';
// import { CreateInvoice } from '@/app/ui/invoices/buttons';
// import { lusitana } from '@/app/ui/fonts';
// import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { FaRegUserCircle, FaUsers, FaQrcode } from "react-icons/fa";

const QR = () => {
    return (
        <div className="h-100 flex flex-grow-1 mt-3">
            <div className="container">
                <div className="card" style={{ backgroundColor: "var(--bs-inner-color)" }}>
                    <div className="card-body">
                        <div className="d-flex align-items-center" style={{ color: "var(--head-color)" }}>
                            <FaUsers size={"24px"} color="var(--head-color)" /><h4 className="px-2">Members</h4><p className="px-3">{"1 result"}</p>
                        </div>
                        <SearchInput className="search-input" />
                    </div>
                </div>
            </div >
        </div >
    );

}

export default QR; 