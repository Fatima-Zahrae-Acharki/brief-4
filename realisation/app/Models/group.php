<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class group extends Model
{
    use HasFactory;
    protected $table = 'groups';
    protected $fillable= [
        'id',
        'group_name',
        'tutor_id',
        'logo'
    ];
}
