"use client"

import { FileBox } from 'lucide-react'
import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import Tooltip from '../common/Tooltip'
const items = ["busic","slate","s;la", "cake"]
function index() {
    const itemsPreview = items.slice(0, 2).join(", ");
    return (
        <div className='w-full'>
            <div className='flex justify-between items-center'>
                <h2 className='text-xl font-bold font-serif'>Order <span className='text-transparent bg-linear-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text'>'s</span></h2>
                <div className='flex cursor-pointer items-center gap-1 px-2 py-1 rounded-full bg-orange-300/25 hover:bg-orange-400/25 transition-all duration-150 ease-in border border-orange-300'>
                    <FileBox size={16} />
                    <span >Export As CSV</span>
                </div>

            </div>

            <Table>
                <TableCaption>A list of your orders {new Date().toLocaleDateString()}.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead >Sr.</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead className="text-left">Items</TableHead>
                        <TableHead className="text-center">Amount</TableHead>
                        <TableHead className="text-center">Paid</TableHead>
                        <TableHead className="text-center">PaymentId</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">1</TableCell>
                        <TableCell>Muzan</TableCell>
                        <TableCell>
                        <Tooltip content='ddddssw'>
                            <p className='max-w-30 truncate'>fastgame308@gmail.com</p>
                        </Tooltip>
                        </TableCell>
                        <TableCell className="">
                        <Tooltip content='dddddd'>
                            <p>{itemsPreview} {items.length > 2 && `+${items.length - 2} more`}</p>
                        </Tooltip>
                         </TableCell>
                        <TableCell className="text-center">24,</TableCell>
                        <TableCell className="text-center">No</TableCell>
                        
                            <TableCell className='text-center' >
                                <Tooltip content='sdsddds'>
                                    <p className="font-mono truncate max-w-30">3kn234bk4j23k24k23b234j232</p>
                                </Tooltip>
                            </TableCell>
                        
                    </TableRow>
                </TableBody>
            </Table>

        </div>
    )
}

export default index