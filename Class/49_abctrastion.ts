// abstract class Controller {
//     abstract handle(req: any): void;
//
//     handleWithLogs(req: any) {
//         console.log('START')
//         this.handle(req)
//         console.log('END')
//     }
// }
//
// class UserController extends Controller {
//     handle(req: any) {
//         console.log(req);
//     }
// }
//
// const c = new UserController()
// c.handleWithLogs('Request')
