<?php

namespace App\Http\Controllers;

use App\Models\group;
use App\Models\tutor;
use App\Models\apprenticesGroup;
use Illuminate\Support\Facades\DB;



class DashboardController extends Controller
{
    // get tutors
    function  tutor(){
        $tutor = tutor::All();
        return $tutor ;
    }



//détail de groupe
    function Group($id){

// get group
        $Groups = group::select("*","groups.id as idGroup")
        ->where('tutor_id',$id)
        ->join('tutor', 'group.tutor_id', '=', 'tutor.id')
        ->first();

// apprentices total
         $CountApprentices = apprenticesGroup::select("*")
        ->where([
            ['tutor_id',$id],
            ['groups_apprentice.Group_id',$Groups->idGroup]
            ])

            ->join('groups', 'groups_apprentice.Group_id', '=', 'groups.id')
            ->join('apprentices', 'groups_apprentice.apprentice_id', '=', 'apprentice.id')
            ->count();

// apprentices list
            $GetApprentices = apprenticesGroup::select("*")
            ->where([
            ['tutor_id',$id],
            ['groups_apprentice.Group_id',$Groups->idGroup]
            ])

            ->join('groups', 'groups_apprentice.Groupe_id', '=', 'groups.id')
            ->join('apprentice', 'groups_apprentice.apprentice_id', '=', 'apprentice.id')
            ->get();


                    }
}