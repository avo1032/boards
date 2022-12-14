import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-baord.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
    constructor(private boardService: BoardsService){}

    @Get('/')
    getAllBoard(): Board[] {
        return this.boardService.getAllBoards();
    }

    @Post()
    @UsePipes(ValidationPipe)
    createBoard(
        @Body() createBoardDto: CreateBoardDto
    ): Board{
        return this.boardService.createBoard(createBoardDto);
    }

    @Get('/:id')
    getBoardById(@Param('id') id: string){
        return this.boardService.getBoardById(id);
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id: string): void{
        this.boardService.deleteBoard(id);
    }

    @Patch('/:id/status')
    updateBoardStatus(@Param('id') id: string, @Body('status', BoardStatusValidationPipe) status: BoardStatus) {
        this.boardService.updateBoardStatus(id, status);
    }
}
