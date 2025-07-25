"use client"

import React from 'react'
import Link from 'next/link'
import './Main.css'
import Card from '../Card/Card'





const Main = () => {









    return (
        <div className="mainBody">
            <div className="upperHead">
                <div className="upperLeft">
                    <h1> New in the Library</h1>

                    <h3> Newly added accessiblitiy resources, guides, and more.</h3>
                </div>


                <div className="upperRight">
                    <Link href="/"> VIEW ALL</Link>
                </div>
            </div>


            {/* MoreContent */}

            <div className=" contentBody">

                <div className="cardSection">
                    <Card title={'RESOURCES'} text={'Making Accessible Books'} />
                    <Card title={'RESOURCES'} text={'Inclusive Publishing'} />
                    <Card title={'RESOURCES'} text={'The APLN (Accessible Publishing...'} />
                    < Card title={'RESOURCES'} text={`The DAISY Consortium's Accessible...`} />
                    <Card title={'RESOURCES'} text={`Language, Please: Style Guide & Resources for...`} />
                    <Card title={`BLOGS & ARTICLES`} text={`4 steps to more inclusive,precise, language`} />
                </div>

            </div>
        </div>
    )
}


export default Main