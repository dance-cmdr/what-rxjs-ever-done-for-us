import React from 'react';
import {
    Image,
    Heading,
    Slide,
    Table,
    TableHeader,
    TableHeaderItem,
    TableBody,
    TableRow,
    TableItem,
  } from 'spectacle';

export default class GlobX extends React.Component {
    render() {
      return (
            <Slide>
                <Heading lineHeight={1}>GlobX State Managemer</Heading>
                <Image src={'./assets/Globex-first.jpg'}/>
                <Table fit >
                    <TableHeader>
                        <TableRow>
                            <TableHeaderItem></TableHeaderItem>
                            <TableHeaderItem>GlobX</TableHeaderItem>
                            <TableHeaderItem>MobX State Tree</TableHeaderItem>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableItem>Size</TableItem>
                            <TableItem>5Kb</TableItem>
                            <TableItem>122Kb</TableItem>
                        </TableRow>
                        <TableRow>
                            <TableItem>Performance</TableItem>
                            <TableItem>8x</TableItem>
                            <TableItem>1x</TableItem>
                        </TableRow>
                    </TableBody>
                </Table>
                
            </Slide>
        )
    }
}
