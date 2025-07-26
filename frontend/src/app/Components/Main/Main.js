"use client"

import React from 'react'
import Link from 'next/link'
import './Main.css'
import Card from '../Card/Card'
import CardJumbo from '../CardJumbo/CardJumbo'





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


            <div className="JumboCardSection">

                <div className="JumboTitle">

                    <div className="">
                        <h1>Featured Collections</h1>
                        <h3> Handpicked and curated collections around accessibility</h3>

                    </div>



                    <Link href="/">View All</Link>






                </div>

                <div className="JumboCards">
                    <CardJumbo text={'Disability Employment'} style={'green'} />
                    <CardJumbo text={'Making Accessible Color Combos'} style={'blue'} />
                    <CardJumbo text={'Tips and Tricks for Inclusive Social Media'} style={'red'} />
                </div>


            </div>
        </div>
    )
}


export default Main