<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Apprentice extends Controller
{
    //
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $apprentice = apprentice::all();
        return view ("apprentice.index",compact('apprentice'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('apprentice.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        apprentice::create([
            "apprentice_name"=>$request->name,
            "apprentice_last_name"=>$request->lName,
            "apprentice_email"=>$request->email,
            "apprentice_phone"=>$request->phone,
            "apprentice_CIN"=>$request->cin,
            "birth_date"=>$request->date_naissance,
            "apprentice_picture"=>$request->image,

          ])->save();
          return redirect('apprentice');
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
        $apprentice = apprentice::find($id);
        return view('apprentice.edit',compact('apprentice'));
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
        apprentice::find($id)
            ->update([
            "apprentice_name"=>$request->name,
            "apprentice_last_name"=>$request->lName,
            "apprentice_email"=>$request->email,
            "apprentice_phone"=>$request->phone,
            "apprentice_CIN"=>$request->cin,
            "birth_date"=>$request->date_naissance,
            "apprentice_picture"=>$request->image,

          ]);
          return redirect('apprentice');
    }

    /**
     * Remove the specified resource from storage.
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        apprentice::find($id)
        ->delete();
        return redirect("apprentice");
    }
}
