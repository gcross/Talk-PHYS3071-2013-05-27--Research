headings = [ // {{{
    "Exponential Blow-up",
    "Entangled system",
    "Matrix product state",
    "Advantages",
    "What I do",
] // }}}

script = function(){ return [ // {{{
    "",
    hireUseActors("b_u","b_d"),
    set(styleFor("b_d"),"opacity",0),
    set(styleFor("b_u"),"opacity",0),
    set("b_d","x",-234.16),
    set("b_u","x",234.16),
    parallel(
        fadeIn(0.5,"b_d"),
        linear(0.5,"b_d","x",0),
        fadeIn(0.5,"b_u"),
        linear(0.5,"b_u","x",0)
    ),
    "",
    hireUseActors("b_uu","b_ud","b_du","b_dd"),
    set(styleFor("b_uu"),"opacity",0),
    set(styleFor("b_ud"),"opacity",0),
    set(styleFor("b_du"),"opacity",0),
    set(styleFor("b_dd"),"opacity",0),
    set("b_uu","y",74.131),
    set("b_du","y",74.121),
    set("b_ud","y",-74.131),
    set("b_dd","y",-74.121),
    parallel(
        fadeOutAndFire(0.5,"b_u","b_d"),
        fadeIn(0.5,"b_uu"),
        linear(0.5,"b_uu","y",0),
        fadeIn(0.5,"b_ud"),
        linear(0.5,"b_ud","y",0),
        fadeIn(0.5,"b_du"),
        linear(0.5,"b_du","y",0),
        fadeIn(0.5,"b_dd"),
        linear(0.5,"b_dd","y",0)
    ),
    "",
    hireUseActors("b_uuu","b_uud","b_udu","b_udd","b_duu","b_dud","b_ddu","b_ddd"),
    set(styleFor("b_uuu"),"opacity",0),
    set(styleFor("b_uud"),"opacity",0),
    set(styleFor("b_udu"),"opacity",0),
    set(styleFor("b_udd"),"opacity",0),
    set(styleFor("b_duu"),"opacity",0),
    set(styleFor("b_dud"),"opacity",0),
    set(styleFor("b_ddu"),"opacity",0),
    set(styleFor("b_ddd"),"opacity",0),
    set("b_uuu","x",120),
    set("b_udu","x",120),
    set("b_duu","x",120),
    set("b_ddu","x",120),
    set("b_uud","x",-120),
    set("b_udd","x",-120),
    set("b_dud","x",-120),
    set("b_ddd","x",-120),
    parallel(
        fadeOutAndFire(0.5,"b_uu","b_ud","b_du","b_dd"),
        fadeIn(0.5,"b_uuu"),
        linear(0.5,"b_uuu","x",0),
        fadeIn(0.5,"b_uud"),
        linear(0.5,"b_uud","x",0),
        fadeIn(0.5,"b_udu"),
        linear(0.5,"b_udu","x",0),
        fadeIn(0.5,"b_udd"),
        linear(0.5,"b_udd","x",0),
        fadeIn(0.5,"b_duu"),
        linear(0.5,"b_duu","x",0),
        fadeIn(0.5,"b_dud"),
        linear(0.5,"b_dud","x",0),
        fadeIn(0.5,"b_ddu"),
        linear(0.5,"b_ddu","x",0),
        fadeIn(0.5,"b_ddd"),
        linear(0.5,"b_ddd","x",0)
    ),
    "",
    "",
    hireUseActors("b_uuuu","b_uuud","b_uudu","b_uudd","b_uduu","b_udud","b_uddu","b_uddd","b_duuu","b_duud","b_dudu","b_dudd","b_dduu","b_ddud","b_dddu","b_dddd"),
    set(styleFor("b_uuuu"),"opacity",0),
    set(styleFor("b_uuud"),"opacity",0),
    set(styleFor("b_uudu"),"opacity",0),
    set(styleFor("b_uudd"),"opacity",0),
    set(styleFor("b_uduu"),"opacity",0),
    set(styleFor("b_udud"),"opacity",0),
    set(styleFor("b_uddu"),"opacity",0),
    set(styleFor("b_uddd"),"opacity",0),
    set(styleFor("b_duuu"),"opacity",0),
    set(styleFor("b_duud"),"opacity",0),
    set(styleFor("b_dudu"),"opacity",0),
    set(styleFor("b_dudd"),"opacity",0),
    set(styleFor("b_dduu"),"opacity",0),
    set(styleFor("b_ddud"),"opacity",0),
    set(styleFor("b_dddu"),"opacity",0),
    set(styleFor("b_dddd"),"opacity",0),
    set("b_uuuu","y",70),
    set("b_uduu","y",70),
    set("b_duuu","y",70),
    set("b_dduu","y",70),
    set("b_uudu","y",70),
    set("b_uddu","y",70),
    set("b_dudu","y",70),
    set("b_dddu","y",70),
    set("b_uuud","y",-70),
    set("b_udud","y",-70),
    set("b_duud","y",-70),
    set("b_ddud","y",-70),
    set("b_uudd","y",-70),
    set("b_uddd","y",-70),
    set("b_dudd","y",-70),
    set("b_dddd","y",-70),
    parallel(
        fadeOutAndFire(0.5,"b_uuu","b_uud","b_udu","b_udd","b_duu","b_dud","b_ddu","b_ddd"),
        fadeIn(0.5,"b_uuuu"),
        linear(0.5,"b_uuuu","y",0),
        fadeIn(0.5,"b_uuud"),
        linear(0.5,"b_uuud","y",0),
        fadeIn(0.5,"b_uudu"),
        linear(0.5,"b_uudu","y",0),
        fadeIn(0.5,"b_uudd"),
        linear(0.5,"b_uudd","y",0),
        fadeIn(0.5,"b_uduu"),
        linear(0.5,"b_uduu","y",0),
        fadeIn(0.5,"b_udud"),
        linear(0.5,"b_udud","y",0),
        fadeIn(0.5,"b_uddu"),
        linear(0.5,"b_uddu","y",0),
        fadeIn(0.5,"b_uddd"),
        linear(0.5,"b_uddd","y",0),
        fadeIn(0.5,"b_duuu"),
        linear(0.5,"b_duuu","y",0),
        fadeIn(0.5,"b_duud"),
        linear(0.5,"b_duud","y",0),
        fadeIn(0.5,"b_dudu"),
        linear(0.5,"b_dudu","y",0),
        fadeIn(0.5,"b_dudd"),
        linear(0.5,"b_dudd","y",0),
        fadeIn(0.5,"b_dduu"),
        linear(0.5,"b_dduu","y",0),
        fadeIn(0.5,"b_ddud"),
        linear(0.5,"b_ddud","y",0),
        fadeIn(0.5,"b_dddu"),
        linear(0.5,"b_dddu","y",0),
        fadeIn(0.5,"b_dddd"),
        linear(0.5,"b_dddd","y",0)
    ),
    "",
    fadeOutAndFire(0.5,"b_uuuu","b_uuud","b_uudu","b_uudd","b_uduu","b_udud","b_uddu","b_uddd","b_duuu","b_duud","b_dudu","b_dudd","b_dduu","b_ddud","b_dddu","b_dddd"),
    rotateNextHeading(),
    "",
    hireAndFadeInUseActors(0.5,"e_atom","e_atom_label"),
    "",
    hireAndFadeInUseActors(0.5,"e_cat","e_cat_label"),
    "",
    hireAndFadeInUseActors(0.5,"e_sci","e_sci_label"),
    "",
    hireAndFadeInUseActors(0.5,"e_peta","e_peta_label"),
    "",
    hireAndFadeInUseActors(0.5,"e_puppies","e_puppies_label"),
    "",
    hireAndFadeInUseActors(0.5,"e_happy_sad"),
    "",
    hireAndFadeInUseActors(0.5,"e_atom_prob"),
    "",
    hireAndFadeInUseActors(0.5,"e_cat_prob"),
    "",
    hireAndFadeInUseActors(0.5,"e_sci_prob"),
    "",
    hireAndFadeInUseActors(0.5,"e_peta_prob"),
    "",
    hireAndFadeInUseActors(0.5,"e_puppies_prob"),
    "",
    fadeOutAndFire(0.5,"e_happy_sad"),
    "",
    hireAndFadeInUseActors(0.5,"e_atom_outcome"),
    "",
    hireAndFadeInUseActors(0.5,"e_cat_outcome"),
    "",
    hireAndFadeInUseActors(0.5,"e_sci_outcome"),
    "",
    hireAndFadeInUseActors(0.5,"e_peta_outcome"),
    "",
    hireAndFadeInUseActors(0.5,"e_puppies_outcome"),
    "",
    hireAndFadeInUseActors(0.5,"e_wrong"),
    "",
    fadeOutAndFire(0.5,
        "e_wrong",
        "e_atom_prob",
        "e_atom_outcome",
        "e_cat_prob",
        "e_cat_outcome",
        "e_sci_prob",
        "e_sci_outcome",
        "e_peta_prob",
        "e_peta_outcome",
        "e_puppies_prob",
        "e_puppies_outcome"
    ),
    "",
    hireAndFadeInUseActors(0.5,"e_p_1_a","e_p_1_b"),
    "",
    hireAndFadeIn(0.5,"e_p_2_a"),
    "",
    hireAndFadeIn(0.5,"e_p_3_a"),
    "",
    hireAndFadeIn(0.5,"e_p_4_a"),
    "",
    hireAndFadeIn(0.5,"e_p_5_a"),
    "",
    hireAndFadeIn(0.5,"e_p_2_b"),
    "",
    fadeOutAndFire(0.5,"e_p_1_b","e_p_2_b"),
    "",
    hireAndFadeIn(0.5,"e_p_3_b"),
    "",
    fadeOutAndFire(0.5,
        "e_p_1_a",
        "e_p_2_a",
        "e_p_3_a",
        "e_p_4_a",
        "e_p_5_a",
        "e_p_3_b",
        "e_atom",
        "e_atom_label",
        "e_cat",
        "e_cat_label",
        "e_sci",
        "e_sci_label",
        "e_peta",
        "e_peta_label",
        "e_puppies",
        "e_puppies_label"
    ),
    rotateNextHeading(),
    hireAndFadeIn(0.5,"e_diagram"),
    "",
    hireAndFadeIn(0.5,"e_matrix"),
    "",
    hireAndFadeIn(0.5,"e_labels"),
    "",
    fadeOutAndFire(0.5,"e_labels"),
    hireAndFadeIn(0.5,"e_matrices"),
    "",
    hireAndFadeIn(0.5,"e_tensors"),
    "",
    hireAndFadeIn(0.5,"e_math"),
    "",
    fadeOutAndFire(0.5,
        "e_diagram",
        "e_matrix",
        "e_matrices",
        "e_tensors",
        "e_math"
    ),
    rotateNextHeading(),
    parallel(
        sequence(
            wait(0.00),
            hireAndFadeInUseActor(0.5,"advantage_1")
        ),
        sequence(
            wait(0.25),
            hireAndFadeInUseActor(0.5,"advantage_2")
        ),
        sequence(
            wait(0.50),
            hireAndFadeInUseActor(0.5,"advantage_3")
        )
    ),
    parallel(
        linear(0.5,styleFor("advantage_2"),"opacity",1,0.125),
        linear(0.5,styleFor("advantage_3"),"opacity",1,0.125)
    ),
    "",
    parallel(
        linear(0.5,styleFor("advantage_1"),"opacity",1,0.125),
        linear(0.5,styleFor("advantage_2"),"opacity",0.125,1)
    ),
    "",
    parallel(
        linear(0.5,styleFor("advantage_2"),"opacity",1,0.125),
        linear(0.5,styleFor("advantage_3"),"opacity",0.125,1)
    ),
    "",
    parallel(
        linear(0.5,styleFor("advantage_1"),"opacity",0.125,1),
        linear(0.5,styleFor("advantage_2"),"opacity",0.125,1)
    ),
    "",
    fadeOutAndFire(0.5,"advantage_1","advantage_2","advantage_3"),
    rotateNextHeading(),
    parallel(
        sequence(
            wait(0.00),
            hireAndFadeInUseActor(0.5,"whatido_1")
        ),
        sequence(
            wait(0.25),
            hireAndFadeInUseActor(0.5,"whatido_2")
        )
    ),
    linear(0.5,styleFor("whatido_2"),"opacity",1,0.125),
    "",
    parallel(
        linear(0.5,styleFor("whatido_1"),"opacity",1,0.125),
        linear(0.5,styleFor("whatido_2"),"opacity",0.125,1)
    ),
    "",
    linear(0.5,styleFor("whatido_1"),"opacity",0.125,1),
]} // }}}
