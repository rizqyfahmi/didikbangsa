<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Member;
use App\Http\Requests;
use Illuminate\Support\Facades\Input;
use DateTime;
use Illuminate\Support\Facades\Session;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $member = Member::all();
//        return view('blog.index', ['blog' => $blog]);
//        return response()->json(['name' => 'Abigail', 'state' => 'CA']);
        return response()->json(['name' => $member]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('blog.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $now = new DateTime();
        $member = new Member();
        $member->member_id = $request->member_id;
        $member->name= $request->name;
        $member->phone = $request->phone;
        $member->email = $request->email;
        $member->photo = $request->photo;
        $member->biography = $request->biography;
        $member->last_login = $request->last_login;
        $member->register_date = $now->format('Y-m-d H:i:s');
        $member->password = md5($request->password);
        $member->location_id = $request->location_id;
        $member->save();
//        return redirect('../public/blog');
        return response()->json(['status' => 'sukses']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


    public function save(){
        $member = new Member();
        $member->member_id = Input::get('member_id');
        $member->name = Input::get('name');
        $member->email = Input::get('email');
        $member->phone = Input::get('phone');
//        $member->register_date = $dt->format('Y-m-d H:i:s');
        $member->save();

        echo 'Sukses';
    }

    public function profil($id){
        return view('profil');
    }

    public function login(Request $request){
        $member = Member::where(function($query) {
            $query  ->where('email', '=', Input::get('email'))
                    ->Where('password', '=', md5(Input::get('password')));
        })->get();
        if(count($member)){
            Session::put('member', $member);
            return response()->json(['status' => 1]);
        }else{
            return response()->json(['status' => 0]);
        }
    }

    public function logout(){
        Session::forget('member');
        Session::flush();
        return redirect('home');
    }

    public function error(){
        return view('error');
    }

}
