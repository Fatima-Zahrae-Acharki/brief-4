<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskPrepa extends Model
{
    use HasFactory;
    protected $table = "task_prepa";
    public $timestamps= false;
    protected $fillable = [
    "task_name",
    "Description",
    "duration",
    "Preparation_brief_id"
    ];
}
